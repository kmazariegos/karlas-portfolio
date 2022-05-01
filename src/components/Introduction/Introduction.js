import React from 'react'
import "./Introduction.css" 
import {Link} from 'react-router-dom'

function Introduction() { 
  return (
<div className='long-intro'>
            <div class="hero-content text">
            <h1 class="heading">Hello! I'm Karla</h1>
            <p class="hero-paragraph">A web developer with an empathetic approach to building polished and engaging user experiences.</p>
            <div className='introductionButton sideIntro'>
            <Link to="/projects">
              <button class="introduction-button">See My Work</button>
            </Link>
            {/* <a href="" data-w-id="Button" class="introduction-button">See my work</a> */}
            </div>
            </div>

    </div>
  )
}

export default Introduction