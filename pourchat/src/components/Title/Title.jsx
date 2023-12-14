import React from 'react';
import './Title.scss'; // Assurez-vous que le chemin vers votre fichier CSS est correct

function Title({ title, location }) {
  return (
    <div className="appart">
      <h1 className="appart__title">{title}</h1>
      <p className="appart__location">{location}</p>
    </div>
  );
}

export default Title;