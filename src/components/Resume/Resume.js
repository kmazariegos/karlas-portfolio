import React from 'react';
import './Resume.css'; 
import Toggle from '../Toggle/Toggle';

function Resume() {
  return (
    <div className='resumeDetails'>
        <Toggle></Toggle>
        <h1 class="resume-title">Resume</h1>
        <h2 className="Main-title">Karla Mazariegos</h2>
        <h2 className="Main-title"> Los Angeles, 90037  |  323.496.9311  |  mazariek@gmail.com  </h2>
        <h2 className="Second-title">Education</h2>


    </div>
  )
}

export default Resume