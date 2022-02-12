import React from 'react'
import "./Intro.css"

function Intro() {
  return (
    <div className='i'>
        <div className='i-right'></div>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2>Hello, my name is</h2>
                <h2 className='i-name'>Karla</h2>
            </div>
        </div>
    </div>
  )
}

export default Intro