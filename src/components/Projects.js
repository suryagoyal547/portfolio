import React from "react";
import ProjectCard from "./ProjectCard";
import './Projects.css'
import timer from './assets/timer.png'
import weather from './assets/weather.png'
import imageGen from './assets/image-generator.png'
import portfolio from './assets/portfolio.png'

const Projects = () => {

  const projects = [
    {
      imageSrc: weather,
      title: "Weather-App (React.Js)",
      overview: "A React.js Weather App",
      liveLink: "https://64e50f8c8968a91750438a01--incredible-tartufo-7ecdd3.netlify.app/",
      githubLink: "https://github.com/suryagoyal547/react_weather_app",
    },
    {
      imageSrc: timer,
      title: "Pomodoro-Timer(HTML, CSS, Javascript)",
      overview: "A pomodoro timer having timer set to 25 minutes and 3 buttons: start, stop, reset having corresponding functionalities",
      liveLink: "https://gleeful-ganache-a6bb3a.netlify.app/",
      githubLink: "https://github.com/suryagoyal547/timer_clock",
    },
    {
      imageSrc: imageGen,
      title: "Image Generator (HTML, CSS, Javascript)",
      overview: "An online image generator which takes user's input and Generates image using Unsplash API",
      liveLink: "https://subtle-puffpuff-67a5af.netlify.app/",
      githubLink: "https://github.com/suryagoyal547/Image-Generator",
    },
    {
      imageSrc: portfolio,
      title: "Portfolio Website",
      overview: "A Portfolio Website having Skills,projects,contact and About section",
      liveLink: "",
      githubLink: "https://github.com/suryagoyal547/portfolio",
    }
  ];

  return (
    <div className="main">
      <div className="project-container">
        {projects.map((project, index) => (
          <ProjectCard  {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
