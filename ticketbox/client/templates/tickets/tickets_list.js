Template.ticketsList.helpers({
  tickets: function() {
    return Tickets.find({}, {sort:{artist: 1}});
  }
});

