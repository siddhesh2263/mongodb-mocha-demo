const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;


// Connect to database before tests run
before((done) => {
  // Connect to mongodb
  mongoose.connect('mongodb://localhost/testaroo');

  mongoose.connection.once('open', () => {
    console.log('Connection has been made');
    done();
  }).on('error', (error) => {
    console.log('Connection error:', error);
  });
});


// Drop the characters collection before each tests
beforeEach((done) => {
  // Drop the collection
  mongoose.connection.dropCollection('mariochars', () => {
    // console.log('Collection dropped')
    done();
  });
});
