import React from 'react';
import './Resume.css'; 
import Toggle from '../Toggle/Toggle';

function Resume() {
  return (
    <div className='resumeDetails'>
        <Toggle></Toggle>

        <div className='l-left-wrapper'>
        
            <h1 class="resume-title">Education</h1>
            <h2 className="Main-title">Boston College</h2>
            <h2 className="Second-title">B.A., Communications & Marketing - Boston, MA (2015)</h2>

            <h1 class="resume-title">Skills & Abilities</h1>
            <h2 className="Second-title">JavaScript | React | Redux | HTML | CSS | NodeJS | Express | SQL | PostgreSQL | MongoDB | Flask | Restful API Development | Mocha | Chai | GitHub 
            | Jira | Salesforce | Postman | Tableau | Excel | Entrepreneurship | E-commerce | Brand Development | Operations Management | Strategic Planning 
            | Supply Chain Management | Amazon Seller Central | Shopify | SEO | Google Analytics  | Ad Campaign Management</h2>
          
          </div>


    </div>
  )
}

export default Resume