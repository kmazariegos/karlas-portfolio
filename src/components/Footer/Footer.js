import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='f'>
        <h1 className='f-title'>Find more of me on:</h1>

        <div class="container-2 w-container">
        <a href='https://www.linkedin.com/in/karla-mazariegos/' target="https://www.linkedin.com/in/karla-mazariegos/" className="footer-links">LinkedIn</a>
        <a href='https://docs.google.com/document/d/1ExU4i1drW4wDXOy4zlH7KSwozJ-pR2nuUx_oUslFF_4/edit?usp=sharing' target="https://docs.google.com/document/d/1ExU4i1drW4wDXOy4zlH7KSwozJ-pR2nuUx_oUslFF_4/edit?usp=sharing" className="footer-links">Resume</a>
        <a href='https://github.com/kmazariegos' target="https://github.com/kmazariegos" className="footer-links">Github</a>
        </div>

    </div>
  )
}

export default Footer 