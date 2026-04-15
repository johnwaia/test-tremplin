const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Permet de lire les données JSON envoyées par le front

// Connexion MongoDB (à configurer plus tard avec ton lien Atlas)
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Serveur prêt pour le projet Tremplin !");
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});