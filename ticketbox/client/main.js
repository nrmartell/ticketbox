
  Session.setDefault('img', null);

  var getPicture = function(opts) {
    MeteorCamera.getPicture(opts, function(err, data) {
      if (err) {
        console.log('error', err);
      }
      if (data) {
        Session.set('img', data);
         var ticket = {
           photo: data,
           author: Meteor.user().username,
           createdBy: Meteor.userId(),
           submitted: new Date()
        };
        ticket._id = Tickets.insert(ticket);
        Router.go('ticketPage', ticket);
          }
    });
  };

  Template.cameraEvent.events({
    'click button': function () {
      getPicture({
        width: 350,
        height: 350,
        quality: 75
      });
    }
  });

  Template.libraryEvent.events({
    'click button': function () {
      if (Meteor.isCordova) {
        getPicture({
          width: 350,
          height: 350,
          quality: 75,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        });


      } else {
        alert('Cordova only feature.');
      }
    }
  });
  Template.img.helpers({
    img: function() {
      return Session.get('img');
    }
  });
