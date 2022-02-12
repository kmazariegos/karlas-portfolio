import React from 'react'
import "./Intro.css"

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
                        <div className='i-title-item'>Web Dev</div>
                        <div className='i-title-item'>Web Dev</div>
                        <div className='i-title-item'>Web Dev</div>
                    </div>
                </div>
            </div>
        </div>

        <div className='i-right'>Right</div>
    </div>
  )
}

export default Intro