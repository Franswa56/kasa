import React from 'react';
import './_Host.scss'; // Assurez-vous que le chemin vers votre fichier CSS est correct

function Host({ name, picture }) {
  return (
    <div className="host">
      <p className="host__name">{name}</p>
      <img src={picture} alt={`Photo de l'hôte`} className="host__picture" />
    </div>
  );
}

export default Host;