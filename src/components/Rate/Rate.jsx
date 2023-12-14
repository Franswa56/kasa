import React from 'react';
import './Rate.scss'; // Assurez-vous que le chemin vers votre fichier CSS est correct
import fullStar from '../../assets/fullstar.png'; // Remplacez par le chemin de votre image d'étoile rouge
import star from '../../assets/star.png'; // Remplacez par le chemin de votre image d'étoile grise

function Rate({ rating }) {
  const totalStars = 5;
  let stars = [];

  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      <img key={i} src={i <= rating ? fullStar : star} className="star" />
    );
  }

  return <div className="rate-container">{stars}</div>;
}

export default Rate;