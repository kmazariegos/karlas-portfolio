import React from 'react' 
import './ThirdProject.css'
import img from '../../img/phone3.png'   


function ThirdProject() {
  return (
    <div className='third'> 

        <div className='third-left'> 
            <div className='third-left-wrapper'>
                <h1 className='third-name'>Meal Planner App</h1>
                <p className='third-desc'>
                Reimagining the way you chat with others on this collaborative iOS app
                </p>
                
                <div class="thirdButton side3">
                <button className='project-button'>View Project</button>
                </div>
            </div>
        </div>

        <div className='third-right'>
                <div class="child3 bounce3">
                  <img className='third-img' src={img} alt=''></img>
                </div>
        </div>

      

    </div>
  )
}

export default ThirdProject