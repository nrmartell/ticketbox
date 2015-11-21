// Meteor.publish('tickets', function() {
//   return Tickets.find();
// });

Meteor.publish('tickets', function(options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Tickets.find({}, options);
});

Meteor.publish('singleTicket', function(id) {
  check(id, String);
  return Tickets.find(id);
});


Meteor.publish('myTickets', function(){
    var currentUserId = this.userId;
    return Tickets.find({createdBy: currentUserId})
});
