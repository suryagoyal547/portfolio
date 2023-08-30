import React from 'react';
import './SkillCard.css'; 

const SkillCard = ({ imageUrl, skillName, skillOverview }) => {
  return (
    <div className="skill-card">
      <img className="skill-image" src={imageUrl} alt={skillName} />
      <h3 className="skill-name">{skillName}</h3>
      <p className="skill-overview">{skillOverview}</p>
    </div>
  );
};


export default SkillCard;