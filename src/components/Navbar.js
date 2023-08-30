import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>

            <div className="nav-left">
                <div className="text">
                  Portfolio
                </div>
            </div>

           <div className="nav-right">
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/skills">Skills</Link>
           <Link to="/projects">Project</Link>
           <Link to="/contact">Contact</Link>
           </div>
      
    </div>
  )
}

export default Navbar
