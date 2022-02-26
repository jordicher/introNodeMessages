const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: String,
});

const model = mongoose.model('User', mySchema); //seria com el nom de la taula a una taula sql

module.exports = model;
