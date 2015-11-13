Template.userPage.helpers({
  tickets: function () {
    selector = {userId: Meteor.userId()};
    options = {sort: {createdAt: -1}};
    return Tickets.find(selector, options);
  }
});