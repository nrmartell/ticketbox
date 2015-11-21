// Template.userPage.helpers({
//   tickets: function () {
//     selector = {userId: Meteor.userId()};
//     options = {sort: {createdAt: -1}};
//     return Tickets.find(selector, options);
//   }
// });

Template.userPage.helpers({
	tickets: function(){
	var currentUserId = Meteor.userId();
  	return Tickets.find({createdBy: currentUserId},
  	{sort: {createdAt: -1}});
  	}
});