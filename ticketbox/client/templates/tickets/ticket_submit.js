Template.addTicket.events({
	'submit form': function(e){
		e.preventDefault();
		
		var ticket ={
			band: $(e.target).find('[name=band]').val(),
			tour: $(e.target).find('[name=tour]').val(),
			year: $(e.target).find('[name=year]').val(),
			photo: $(e.target).find('[name=photo]').val(),

		};

	Meteor.call('ticketInsert', ticket, function(error, result){
		if(error)
			return alert(error.reason);
		Router.go('ticketPage',{_id: result._id});

	});
	Router.go('ticketsList');

	}


});
