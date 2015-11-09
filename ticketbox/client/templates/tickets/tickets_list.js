Template.ticketsList.helpers({
  tickets: function() {
    return Tickets.find();
  }
});





// var ticketsData = [
//   {
//     band: 'All American Rejects/Motion city soundtrack',
//     tour: 'Too Bad for Hell Tour',
//     year: '2003'
//   },
//   {
//     band: 'Incubus',
//     tour: 'Crow Left of the Murder',
//     year: '2003'
//   }, 
//   {
//     band: 'Rancid, The Ataris, Andrew wK',
//     tour: 'Warped Tour',
//     year: '2003'
//   }
// ];
// Template.ticketsList.helpers({
//   tickets: ticketsData
// });