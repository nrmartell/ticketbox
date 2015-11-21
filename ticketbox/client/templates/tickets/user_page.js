Template.userPage.helpers({
	tickets: function(){
	var currentUserId = Meteor.userId();
  	return Tickets.find({createdBy: currentUserId},
  	{sort:{createdAt: -1}});
  	}
});

