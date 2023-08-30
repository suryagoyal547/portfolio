import React from 'react'
import './Skills.css'
import SkillCard from './SkillCard'
import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import cpp from './assets/cpp.png'
import react from './assets/react.png'
import sql from './assets/mysql.png'
import git from './assets/git.png'


const Skills = () => {
  const skills = [
    {
      imageUrl: cpp,
      skillName: 'C++',
      skillOverview: 'High-performance programming language, used for system software, games, and applications, with strong control over hardware',
    },
    {
      imageUrl: html,
      skillName: 'HTML',
      skillOverview: ' Markup language that structures web content, using tags to define elements and layout of web pages',
    },
    {
      imageUrl: css,
      skillName: 'CSS',
      skillOverview: 'Stylesheet language for web design, enhancing HTML by controlling visual aspects and layout of web pages',
    },
    {
      imageUrl: js,
      skillName: 'Javascript',
      skillOverview: 'Dynamic scripting language for web development, adding interactivity, animations, and logic to web pages',
    },
    {
      imageUrl: react,
      skillName: 'React Js',
      skillOverview: 'JavaScript library for building user interfaces, enabling creation of dynamic and reusable UI components.',
    },
    {
      imageUrl: sql,
      skillName: 'DBMS (MySQL)',
      skillOverview: 'Popular open-source relational database management system, used to store, manage, and retrieve structured data',
    },
    {
      imageUrl: git,
      skillName: 'Git/Github',
      skillOverview: 'Version control system (Git) tracks code changes; GitHub is a platform hosting Git repositories for collaborative software development.',
    }


  ]


  return (
    <div className='main'>
      
      <div className="skills-container">
        {skills.map((skill) => (
          <SkillCard
            imageUrl={skill.imageUrl}
            skillName={skill.skillName}
            skillOverview={skill.skillOverview}
          />
        ))}
      </div>
    </div>



    
  )
}

export default Skills
