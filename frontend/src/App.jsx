import React, { useState } from 'react';
import './index.css' 

const ContactForm = () => {
  return (
    // Conteneur principal avec l'image de fond
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center" 
         style={{ backgroundImage: "url('/salon.png')" }}>
      
      {/* Overlay sombre pour la lisibilité */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Carte du formulaire avec effet de flou ou semi-transparent */}
      <div className="relative z-10 w-full max-w-5xl bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/20 text-white shadow-2xl">
        
        <h1 className="text-3xl font-bold text-white">CONTACTEZ L'AGENCE</h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* COLONNE GAUCHE : COORDONNÉES */}
          <div>
            <h2 className="uppercase text-sm font-semibold mb-4">Vos coordonnées</h2>
            
            {/* Civilité */}
            <div className="flex gap-4 mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="civility" className="accent-orange-500" /> Mme
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="civility" className="accent-orange-500" /> M
              </label>
            </div>

            {/* Inputs Coordonnées */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <input type="text" placeholder="Nom" className="w-full p-3 rounded-full bg-white text-black focus:outline-none" />
                <input type="text" placeholder="Prénom" className="w-full p-3 rounded-full bg-white text-black focus:outline-none" />
              </div>
              <input type="email" placeholder="Adresse mail" className="w-full p-3 rounded-full bg-white text-black focus:outline-none" />
              <input type="tel" placeholder="Téléphone" className="w-full p-3 rounded-full bg-white text-black focus:outline-none" />
            </div>

            {/* Disponibilités */}
            <h2 className="uppercase text-sm font-semibold mt-8 mb-4">Disponibilités pour une visite</h2>
            <div className="flex flex-wrap gap-2 mb-4">
               <select className="p-2 rounded-full bg-white text-gray-500 flex-1 min-w-[100px]"><option>Lundi</option></select>
               <select className="p-2 rounded-full bg-white text-gray-500 w-20"><option>7h</option></select>
               <select className="p-2 rounded-full bg-white text-gray-500 w-20"><option>0m</option></select>
               <button type="button" className="bg-indigo-900 text-white px-4 py-2 rounded-full text-xs font-bold uppercase">Ajouter Dispo</button>
            </div>
            {/* Liste des dispos ajoutées */}
            <div className="space-y-2">
              <div className="bg-gray-200/80 text-gray-600 px-4 py-1 rounded-full text-sm flex justify-between items-center w-fit gap-4">
                Lundi à 9h45 <span className="cursor-pointer font-bold">×</span>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : MESSAGE */}
          <div className="flex flex-col">
            <h2 className="uppercase text-sm font-semibold mb-4">Votre message</h2>
            
            {/* Types de demande */}
            <div className="flex flex-wrap gap-4 mb-4 text-xs lg:text-sm">
              <label className="flex items-center gap-2"><input type="radio" name="subject" /> Demande de visite</label>
              <label className="flex items-center gap-2"><input type="radio" name="subject" /> Être rappelé.e</label>
              <label className="flex items-center gap-2"><input type="radio" name="subject" /> Plus de photos</label>
            </div>

            {/* Zone de texte */}
            <textarea 
              placeholder="Votre message" 
              className="w-full flex-grow p-4 rounded-3xl bg-white text-black focus:outline-none min-h-[200px]"
            ></textarea>

            {/* Bouton Envoyer */}
           <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-12 rounded-full self-end uppercase shadow-lg">
              Envoyer
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ContactForm;