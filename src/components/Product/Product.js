import React from 'react'
import "./Product.css"
import img from '../../img/coding.png'

function Product() {
  return (
    <div className='p'>
        Card
        <div className='p-browser'>
            <div className='p-circle'></div>
            <div className='p-circle'></div>
            <div className='p-circle'></div>
        </div>
        <a href='http://llama.dev' target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
        </a>
    </div>
  )
}

export default Product