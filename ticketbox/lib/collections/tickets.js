Tickets = new Mongo.Collection('tickets');

Tickets.allow({
  update: function(userId, ticket) { return ownsDocument(userId, ticket); },
  remove: function(userId, ticket) { return ownsDocument(userId, ticket); },
});

Tickets.deny({
  update: function(userId, ticket, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'band', 'tour', 'year').length > 0);
  }
});

Meteor.methods({
	ticketInsert: function(ticketAttributes){
		check(Meteor.userId(), String);
		check(ticketAttributes,{
			band: String,
			tour: String,
			year: String

		});
  if (Meteor.isServer) {
      ticketAttributes.title += "(server)";
      // wait for 5 seconds
      Meteor._sleepForMs(5000);
    } else {
      ticketAttributes.title += "(client)";
    }

		var user= Meteor.user();
		var ticket = _.extend(ticketAttributes,{
			userId: user._id,
			author: user.username,
			submitted: new Date()

		});
		var ticketId= Tickets.insert(ticket);
		return {
			_id: ticketId
		};
	}


});


