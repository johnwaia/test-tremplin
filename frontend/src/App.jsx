import React, { useState } from 'react';
import './index.css';

const ContactForm = () => {
  // 1. Création de l'état pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    civility: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    subject: '',
    message: '',
    disponibilites: ["Lundi à 9h45"] // Exemple statique, peut être rendu dynamique
  });

  // 2. Fonction pour mettre à jour l'état à chaque changement dans les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 3. Fonction pour envoyer les données au backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Message envoyé avec succès !");
      } else {
        alert("❌ Erreur lors de l'envoi.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("❌ Impossible de contacter le serveur.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center" 
         style={{ backgroundImage: "url('/salon.png')" }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 w-full max-w-5xl bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/20 text-white shadow-2xl">
        <h1 className="text-3xl font-bold text-white mb-6">CONTACTEZ L'AGENCE</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="uppercase text-sm font-semibold mb-4">Vos coordonnées</h2>
            <div className="flex gap-4 mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="civility" value="Mme" onChange={handleChange} className="accent-orange-500" /> Mme
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="civility" value="M" onChange={handleChange} className="accent-orange-500" /> M
              </label>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <input type="text" name="nom" placeholder="Nom" onChange={handleChange} className="w-full p-3 rounded-full bg-white text-black focus:outline-none" required />
                <input type="text" name="prenom" placeholder="Prénom" onChange={handleChange} className="w-full p-3 rounded-full bg-white text-black focus:outline-none" required />
              </div>
              <input type="email" name="email" placeholder="Adresse mail" onChange={handleChange} className="w-full p-3 rounded-full bg-white text-black focus:outline-none" required />
              <input type="tel" name="telephone" placeholder="Téléphone" onChange={handleChange} className="w-full p-3 rounded-full bg-white text-black focus:outline-none" />
            </div>
            {/* ... Reste de la colonne gauche (Dispos) ... */}
          </div>

          <div className="flex flex-col">
            <h2 className="uppercase text-sm font-semibold mb-4">Votre message</h2>
            <div className="flex flex-wrap gap-4 mb-4 text-xs lg:text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="subject" value="Demande de visite" onChange={handleChange} /> Demande de visite
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="subject" value="Être rappelé.e" onChange={handleChange} /> Être rappelé.e
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="subject" value="Plus de photos" onChange={handleChange} /> Plus de photos
              </label>
            </div>

            <textarea 
              name="message"
              placeholder="Votre message" 
              onChange={handleChange}
              className="w-full flex-grow p-4 rounded-3xl bg-white text-black focus:outline-none min-h-[200px]"
              required
            ></textarea>

            <button type="submit" className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-12 rounded-full self-end uppercase shadow-lg">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;