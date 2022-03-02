import React from 'react'
import './SecondProject.css'
import img from '../../img/comp2.png'   


function SecondProject() {
  return (
    <div className='first'>

      <div className='s-right'>
          <div class="child2 bounce2">
                    <img className='s-img' src={img} alt=''></img>
          </div>
      </div>

      <div className='s-left'>
          <div className='s-right-wrapper'>
              <h1 className='s-name'>Bus Tracking App</h1>
              <p className='s-desc'>
              Reimagining the way you chat with others on this collaborative iOS app
              </p>
              
              <div class="secondButton side2">
              <button className='project-button'>View Project</button>
              </div>
          </div>
      </div>

    </div>
  )
}

export default SecondProject