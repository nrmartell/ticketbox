Template.addTicket.events({
	'submit form': function(e){
		e.preventDefault();
		
		var ticket ={
			band: $(e.target).find('[name=band]').val(),
			tour: $(e.target).find('[name=tour]').val(),
			year: $(e.target).find('[name=year]').val()

		};

		ticket._id = Tickets.insert(ticket);
		Router.go('ticketPage', ticket);

	}


});