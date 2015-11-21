Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
  // waitOn: function() { 
  //   return [Meteor.subscribe('notifications')]
  // }
});

TicketsListController = RouteController.extend({
  template: 'ticketsList',
  increment: 5, 
  ticketsLimit: function() { 
    return parseInt(this.params.ticketsLimit) || this.increment; 
  },
  findOptions: function() {
    return {sort: this.sort, limit: this.ticketsLimit()};
  },
  subscriptions: function() {
    this.ticketsSub = Meteor.subscribe('tickets', this.findOptions());
  },
  tickets: function() {
    return Tickets.find({}, this.findOptions());
  },
  data: function() {
    var self = this;
    return {
      tickets: self.tickets(),
      ready: self.ticketsSub.ready,
      nextPath: function() {
        if (self.tickets().count() === self.ticketsLimit())
          return self.nextPath();
      }
    };
  }
});

NewTicketsController = TicketsListController.extend({
  sort: {submitted: -1, _id: -1},
  nextPath: function() {
    return Router.routes.newTickets.path({ticketsLimit: this.ticketsLimit() + this.increment})
  }
});


Router.route('/', {
  name: 'ticketsList',
  controller: NewTicketsController
});

Router.route('/new/:ticketsLimit?', {name: 'newTickets'});


Router.route('/tickets/:_id', {
  name: 'ticketPage',
  waitOn: function() {
    return [
      Meteor.subscribe('singleTicket', this.params._id),
      // Meteor.subscribe('comments', this.params._id)
    ];
  },
  data: function() { return Tickets.findOne(this.params._id); }
});

Router.route('/tickets/:_id/edit', {
  name: 'ticketEdit',
  waitOn: function() { 
    return Meteor.subscribe('singleTicket', this.params._id);
  },
  data: function() { return Tickets.findOne(this.params._id); }
});

Router.route('/submit', {name: 'addTicket'});


Router.route('/mytickets', {
        name:'userPage',
        waitOn: function() {
    return Meteor.subscribe('myTickets');
  },
      data:function(){
      return Tickets.find({createdBy: Meteor.userId()})
        }             
    });



var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'ticketPage'});
Router.onBeforeAction(requireLogin, {only: 'addTicket'});