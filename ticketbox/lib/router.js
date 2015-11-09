Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('tickets'); }
});

Router.route('/', {name: 'ticketsList'});
Router.route('/tickets/:_id', {
  name: 'ticketPage',
  data: function() { return Tickets.findOne(this.params._id); }
});
Router.route('/submit', {name: 'addTicket'});

Router.onBeforeAction('dataNotFound', {only: 'ticketPage'});