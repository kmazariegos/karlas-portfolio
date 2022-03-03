import React from 'react' 
import "./Navi.css"
import {Link} from "react-router-dom";

function Navi() {
  return (
    <div className='n'>
      <Link to="/" class="n-logo">Karla</Link>
      <Link to="/" class="n-logo-p">Projects</Link>
      <Link to="/" class="n-logo-p">Resume</Link>
    </div>
  )
}

export default Navi