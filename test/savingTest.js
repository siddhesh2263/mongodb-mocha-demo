const mocha = require('mocha'); //Not required
const assert = require('assert');
const MarioChar = require('../models/marioChar');

// Describe test
describe('Saving records', () => {

  // Create tests
  it('Saves a record to the database', (done) => {

    var char = new MarioChar({
      name: 'Mario',
      weight: 123
    });

    char.save().then(() => {
      assert(char.isNew === false); // Check if data is present in the database
      done();
    }); //Asynchronous function

  });

});
