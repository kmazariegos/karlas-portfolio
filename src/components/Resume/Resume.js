import React from 'react';
import './Resume.css'; 
import Toggle from '../Toggle/Toggle';

function Resume() {
  return (
    <div className='resumeDetails'>
        <Toggle></Toggle>

        <div className='l-left-wrapper'>
            <h1 class="resume-title">Experience</h1>
            <h2 className="Main-title">Karla Mazariegos</h2>
            <h2 className="Second-title">Highly entrepreneurial problem-solver and software enthusiast motivated by bringing concepts to full fruition. 
            Proven ability to successfully analyze an organization's business requirements, identify potential opportunities, and develop innovative solutions to enhance product revenue and user experience. 
            Valuable in a variety of industries and fast-paced environments.</h2>
          </div>

          <div className='r-right-wrapper'>
            <h1 class="resume-title">Education</h1>
            <h2 className="Main-title">Boston College</h2>
            <h2 className="Second-title">B.A., Communications & Marketing – Boston, MA (2015)</h2>
          </div>

          <div className='l-left-wrapper'>
            <h1 class="resume-title">Experience</h1>
            <h2 className="Main-title">Karla Mazariegos</h2>
            <h2 className="Second-title">Education</h2>
          </div>
          
          <div className='r-right-wrapper'>
            <h1 class="resume-title">Resume</h1>
            <h2 className="Main-title">Karla Mazariegos</h2>
            <h2 className="Second-title">Education</h2>
          </div>


    </div>
  )
}

export default Resume