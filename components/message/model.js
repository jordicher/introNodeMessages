const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  user: String,
  message: {
    type: String,
    required: true,
  },
  date: Date,
});

const model = mongoose.model('Message', mySchema); //seria com el nom de la taula a una taula sql

module.exports = model;
