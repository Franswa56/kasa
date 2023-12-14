import React from 'react';
import './Tags.scss'; // Assurez-vous que le chemin vers votre fichier CSS est correct

function Tags({ tags }) {
  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;