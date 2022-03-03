import React from 'react' 
import "./Navi.css"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Navi() {
  return (
    <div className='n'>
    <Router>
      <Link to="/" class="n-logo">Karla</Link>
      <Link to="/" class="n-logo-p">Projects</Link>
      <Link to="/" class="n-logo-p">Resume</Link>
    </Router>
    </div>
  )
}

export default Navi