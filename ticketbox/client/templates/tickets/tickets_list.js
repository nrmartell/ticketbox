Template.ticketsList.helpers({
  tickets: function() {
    return Tickets.find({}, {sort:{year: -1, band: 1}});
  }
});


