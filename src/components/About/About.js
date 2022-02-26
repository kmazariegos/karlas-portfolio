import React from 'react'
import "./About.css"
import award from '../../img/award.png'
import karla from '../../img/girl2.png'

export const About = () => {
  return (
    <div className='a'>
    <div className='a-left'>
        <div className='a-card'>
            <img className='a-img' src={karla} alt=''></img>
        </div>
    </div>
    <div className='a-right'>
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Fullstack Web Developer
        </p>
        <p className="a-desc">
        Highly entrepreneurial problem-solver and software enthusiast motivated by bringing concepts to full fruition. 
        Proven ability to successfully analyze an organization's business requirements, identify potential opportunities, and develop innovative solutions to enhance product revenue and user experience. 
        Valuable in a variety of industries and fast-paced environments.
        </p>
        <div className='a-award'>
            <img src={award} alt='' className='a-award-img'></img>
            <div className="a-award-texts">
            <h4 className="a-award-title">Grace Hopper</h4>
            <p className="a-award-desc">
            2020 Software Engineering Scholar – Virtual (2020)
            </p>
          </div>
        </div>
    </div>
    </div>
  )
}
