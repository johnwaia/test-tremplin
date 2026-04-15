const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  civility: String,
  nom: String,
  prenom: String,
  email: String,
  telephone: String,
  message: String,
  typeDemande: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', ContactSchema);