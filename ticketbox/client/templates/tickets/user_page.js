Template.userPage.helpers({
	tickets: function(){
	var currentUserId = Meteor.userId();
  	return Tickets.find({createdBy: currentUserId},
  	{sort:{band: 1, year: 1}});
  	}
});

