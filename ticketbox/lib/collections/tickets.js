Tickets = new Mongo.Collection('tickets');

Tickets.allow({
  insert: function(ticket){
  return true;
  },
  update: function(userId, ticket) { return ownsDocument(userId, ticket); },
  remove: function(userId, ticket) { return ownsDocument(userId, ticket); },
});

Meteor.methods({
  ticketInsert: function(ticketAttributes) {
    check(this.userId, String);
    check(ticketAttributes, {
      photo: String,
      
    });

Tickets.deny({
  update: function(userId, ticket, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'photo').length > 0);
  }
});

Tickets.deny({
  update: function(userId, ticket, fieldNames, modifier) {
    var errors = validateTicket(modifier.$set);
    return errors.photo || errors.url;
  }
});

validateTicket = function (ticket) {
  var errors = {};

  if (!ticket.photo)
    errors.photo = "Please fill in a headline";

  return errors;
}

    var errors = validatePhoto(ticketAttributes);
    if (errors.photo || errors.url)
      throw new Meteor.Error('invalid-post', "ya didnt upload anything");
    
    var photoWithSamedata = Tickets.findOne({photo: ticketAttributes.url});
    if (photoWithSamedata) {
      return {
        ticketExists: true,
        _id: ticketWithSameLink._id
      }
    }
    
    var user = Meteor.user();
    var ticket = _.extend(ticketAttributes, {
      userId: user._id, 
      author: user.username, 
      submitted: new Date()
    });
    
    var ticketId = Tickets.insert(ticket);
    
    return {
      _id: ticketId
    };
  }
});