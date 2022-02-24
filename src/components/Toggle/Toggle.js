import React from 'react'
import "./Toggle.css"
import image from '../../img/coding.png'

function Toggle() {
  return (
    <div className='t'>
        <img className='t-icon' alt='' src={image}></img>
        <img className='t-icon' alt='' src={image}></img>
        <div className='t-button'></div>
    </div>
  )
}

export default Toggle