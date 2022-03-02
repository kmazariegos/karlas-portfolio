import React from 'react'
import "./Intro.css" 
import img from '../../img/project1.png' 

function Intro() {
  return (
    <div className='i'> 

        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h1 className='slide-in'>Chat Application</h1>
                <p className='i-desc'>
                Reimagining the way you chat with others on this collaborative iOS app
                </p>
                <button className='project-button'>View Project</button>
            </div>
        </div>

        <div className='i-right'>
            <img className='i-img' src={img} alt=''></img>
        </div>

      

    </div>
  )
}

export default Intro