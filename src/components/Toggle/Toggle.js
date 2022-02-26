import React, { useContext } from 'react'
import "./Toggle.css"
import image from '../../img/coding.png'
import { ThemeContext } from '../../context'

function Toggle() {
  const theme = useContext(ThemeContext)
  const handleClick = () => {
    theme.dispatch({type: "TOGGLE"})
  }
  return(

    <div className='t'>
        <img className='t-icon' alt='' src={image}></img>
        <img className='t-icon' alt='' src={image}></img>
        <div className='t-button' onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}

export default Toggle