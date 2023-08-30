import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css'; // Create this CSS file for styling

const ProjectCard = ({ imageSrc, title, overview, liveLink, githubLink }) => {
  return (
    <div className="project-card">
      <img className="project-image" src={imageSrc} alt={title} />
      <div className="project-details">
        <h2 className="project-title">{title}</h2>
        <p className="project-overview">{overview}</p>
        <div className="project-links">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            Live
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default ProjectCard;
