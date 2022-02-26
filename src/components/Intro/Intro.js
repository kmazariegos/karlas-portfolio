import React from 'react'
import "./Intro.css" 
import img from '../../img/girl.png'

function Intro() {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro'>Hello, my name is</h2> 
                <h1 className='i-name'>Karla</h1>
                <div className='i-title'>
                    <div className='i-title-wrapper'>
                        <div className='i-title-item'>Web Dev</div>
                        <div className='i-title-item'>Software</div>
                        <div className='i-title-item'>Business</div>
                        <div className='i-title-item'>Management</div>
                    </div>
                </div>
                <p className='i-desc'>
                    I design and develop websites and applications. 
                </p>
                <button>See My Work</button>
            </div>
        </div>

        <div className='i-right'>
            <div className='i-bg'></div>
            <img className='i-img' src={img} alt=''></img>
        </div>
    </div>
  )
}

export default Intro