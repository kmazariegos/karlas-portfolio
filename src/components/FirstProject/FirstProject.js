import React from 'react'
import "./FirstProject.css" 
import img from '../../img/project1.png'   

function FirstProject() {
  return (
    <div className='i'> 

        <div className='i-left'> 
            <div className='i-left-wrapper'>
                <h1 className='i-name'>Chat Application</h1>
                <p className='i-desc'>
                Reimagining the way you chat with others on this collaborative iOS app
                </p>
                
                <div class="firstButton side">
                <button className='project-button'>View Project</button>
                </div>
            </div>
        </div>

        <div className='i-right'>
                <div class="child bounce">
                  <img className='i-img' src={img} alt=''></img>
                </div>
        </div>

      

    </div>
  )
}

export default FirstProject