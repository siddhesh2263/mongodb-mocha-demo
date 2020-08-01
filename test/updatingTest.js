const mocha = require('mocha'); //Not required
const assert = require('assert');
const MarioChar = require('../models/marioChar');

// Describe test
describe('Updating records', () => {

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
  it('Update one record in the database', (done) => {

    MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Sid'}).then(() => {
      MarioChar.findOne({_id: char._id}).then((result) => {
        assert(result.name === 'Sid');
        done();
      });
    });

  });



  it('Update weight by 1', (done) => {

    // update vs updateMany
    MarioChar.updateMany({}, { $inc: { weight: 1} }).then(() => {
      MarioChar.findOne({name: 'Mario'}).then((record) => {
        assert(record.weight === 124);
        done();
      });
    });

  });

});
