const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  user: {
    //que esperem rebre com a usuari, es el id de un usuari
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  message: {
    type: String,
    required: true,
  },
  date: Date,
});

const model = mongoose.model('Message', mySchema); //seria com el nom de la taula a una taula sql

module.exports = model;
