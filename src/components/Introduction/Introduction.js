import React from 'react'
import "./Introduction.css"
import karla from '../../img/karla.png' 

function Introduction() {
  return (
    <div className='long-intro'>
            <div class="hero-content text">
            <h1 class="heading">Hello! I'm Karla</h1>
            <p class="hero-paragraph">A product designer with an empathetic approach to designing polished and engaging user experiences.</p>
            <a href="#Projects" data-w-id="Button" class="primary-button">See my work</a>
            </div>


<svg width='500' height='500'>
    <defs>
        <img src={karla} alt=''></img>
    </defs>
    <path stroke='red'  fill="pink"> 
        <animate attributeName='d' dur='5s' repeatCount='indefinite'
           values='
           M476,299Q454,348,426.5,392.5Q399,437,347.5,444Q296,451,246.5,467.5Q197,484,147,463Q97,442,82.5,390Q68,338,55.5,294Q43,250,44.5,201Q46,152,85.5,122.5Q125,93,162.5,61.5Q200,30,248,39Q296,48,340.5,64.5Q385,81,423,114.5Q461,148,479.5,199Q498,250,476,299Z; 
           M453.5,289Q413,328,399.5,374Q386,420,331.5,393.5Q277,367,239,415.5Q201,464,152.5,449Q104,434,129,365Q154,296,141,273Q128,250,108,211Q88,172,137,171Q186,170,198.5,124.5Q211,79,244,104.5Q277,130,310,131.5Q343,133,388.5,147.5Q434,162,464,206Q494,250,453.5,289Z; 
           M476,299Q454,348,426.5,392.5Q399,437,347.5,444Q296,451,246.5,467.5Q197,484,147,463Q97,442,82.5,390Q68,338,55.5,294Q43,250,44.5,201Q46,152,85.5,122.5Q125,93,162.5,61.5Q200,30,248,39Q296,48,340.5,64.5Q385,81,423,114.5Q461,148,479.5,199Q498,250,476,299Z'
        />
    </path>

  </svg>






    </div>
  )
}

export default Introduction