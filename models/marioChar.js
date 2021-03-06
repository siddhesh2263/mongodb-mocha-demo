const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

// Schema
const MarioCharSchema = new Schema({
  name: String,
  weight: Number
});

// Model
const MarioChar = mongoose.model('marioChar', MarioCharSchema);

module.exports = MarioChar;
