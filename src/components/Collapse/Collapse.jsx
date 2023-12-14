import React, { useState } from 'react';
import './Collapse.scss';
import arrowImage from "../../assets/collapse-arrow.png";

function Collapse({ title, content, isList }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const renderContent = () => {
    if (isList) {
      return (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else {
      return <div>{content}</div>;
    }
  };

  return (
    <div className="collapse__container">
      <button onClick={toggleCollapse} className="collapse__title">
        {title}
        <img src={arrowImage} alt="Toggle" className={`arrow-icon ${isOpen ? 'open' : ''}`} />
      </button>
      <div className={`collapse__content ${isOpen ? 'open' : ''}`}>{renderContent()}</div>
    </div>
  );
}

export default Collapse;