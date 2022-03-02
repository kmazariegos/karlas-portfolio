import React from 'react' 
import "./Navi.css"

function Navi() {
  return (
    <div className='n'>
      <a class="n-logo" href='/'>
      <div>karla</div>
      </a>
      
      <a class="n-logo-p" href='/'>
      <div>projects</div>
      </a>

      <a class="n-logo-p" href='/src/components/Resume/Resume.js'>
      <div>resume</div>
      </a>

    </div>
  )
}

export default Navi