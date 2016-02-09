Template.ticketsList.helpers({
  tickets: function() {
    return Tickets.find({}, {sort:{createdAt: -1}});
  }
});


