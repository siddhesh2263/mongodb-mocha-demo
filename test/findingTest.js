const mocha = require('mocha'); //Not required
const assert = require('assert');
const MarioChar = require('../models/marioChar');

// Describe test
describe('Finding records', () => {

  var char;
  beforeEach((done) => {
    char = new MarioChar({
      name: 'Mario',
      weight: 123
    });

    char.save().then(() => {
      assert(char.isNew === false);
      done();
    }); //Asynchronous function
  });



  // Create tests
  it('Finds one record from the database', (done) => {

    MarioChar.findOne({name: 'Mario'}).then((result) => {
      assert(result.name === 'Mario');
      done();
    });

  });


  // Test 2
  it('Finds one reecord by ID from the database', (done) => {

    MarioChar.findOne({_id: char._id}).then((result) => {
      // assert(result._id === char._id); This won't work because Objects cannot be compared, convert them to string
      assert(result._id.toString() === char._id.toString());
      done();
    });

  });

});
