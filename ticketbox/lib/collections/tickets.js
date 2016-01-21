Tickets = new Mongo.Collection('tickets');

Tickets.allow({
  insert: function(ticket){
  return true;
  },
  update: function(ticket) { return true },
  remove: function(ticket) { return true },
});

Meteor.methods({
  ticketInsert: function(ticketAttributes) {
    check(this.userId, String);
    check(ticketAttributes, {
      band: String,
      tour: String,
      year: String,
      photo: String,
      
    });

Tickets.deny({
  update: function(userId, ticket, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames,'band', 'tour', 'year', 'photo').length > 0);
  }
});

Tickets.deny({
  update: function(userId, ticket, fieldNames, modifier) {
    var errors = validateTicket(modifier.$set);
    return errors.photo || errors.url;
  }
});
    
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