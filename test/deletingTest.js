const mocha = require('mocha'); //Not required
const assert = require('assert');
const MarioChar = require('../models/marioChar');

// Describe test
describe('Deleting records', () => {

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
  it('Deletes one record from the database', (done) => {

    MarioChar.findOneAndRemove({name: 'Mario'}).then(() => {
      MarioChar.findOne({name: 'Mario'}).then((result) => {
        assert(result === null);
        done();
      });
    });

  });

});
