var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnimalSchema = new Schema({
  name: String,
  species: String,
  color: String
});

module.exports = mongoose.model('Animal', AnimalSchema);
