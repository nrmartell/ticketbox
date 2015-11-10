if (Tickets.find().count() === 0) {
  Tickets.insert({
     band: 'My First Concert',
    tour: 'Concerts are Fun Tour',
    year: '2003'
  });

  Tickets.insert({
     band: 'My Favorite Concert',
    tour: 'Really Cool Band Tour',
    year: '2003'
  });

  Tickets.insert({
     band: 'BAND',
    tour: 'Tour',
    year: 'Year'
  });


  
}