import React, { useContext } from 'react'
import "./Toggle.css"
import sun from '../../img/2.png'
import moon from '../../img/3.png'
import { ThemeContext } from '../../context'

function Toggle() {
  const theme = useContext(ThemeContext)
  const handleClick = () => {
    theme.dispatch({type: "TOGGLE"})
  }
  return(

    <div className='t'>
        <img className='t-icon' alt='' src={moon}></img>
        <img className='t-icon' alt='' src={sun}></img>
        <div className='t-button' onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}

export default Toggle