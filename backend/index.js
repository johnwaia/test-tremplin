const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connexion BDD
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connecté à MongoDB Atlas"))
  .catch(err => console.error("❌ Erreur BDD:", err));

// Modèle conforme à la maquette
const ContactSchema = new mongoose.Schema({
  civility: String,
  nom: String,
  prenom: String,
  email: String,
  telephone: String,
  subject: String,
  message: String,
  disponibilites: [String], // Pour stocker ton tableau de dispos
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', ContactSchema);

// Route POST
app.post('/api/contact', async (req, res) => {
  try {
    const nouveauContact = new Contact(req.body);
    await nouveauContact.save();
    res.status(201).json({ message: "Enregistré avec succès !" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("🚀 Serveur sur le port 5000"));