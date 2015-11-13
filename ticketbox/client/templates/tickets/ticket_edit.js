Template.ticketEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentTicketId = this._id;

    var TicketProperties = {
      band: $(e.target).find('[name=band]').val(),
      tour: $(e.target).find('[name=tour]').val(),
      year: $(e.target).find('[name=year]').val(),
      photo: $(e.target).find('[name=photo]').val()

    }

    Tickets.update(currentTicketId, {$set: TicketProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('ticketPage', {_id: currentTicketId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this ticket?")) {
      var currentTicketId = this._id;
      Tickets.remove(currentTicketId);
      Router.go('ticketsList');
    }
  }
});