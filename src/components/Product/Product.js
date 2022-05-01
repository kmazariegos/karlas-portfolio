import React from 'react'
import "./Product.css"

function Product({img,link, item}) {
  return (
    <div className='p'>
    <h4>{item.title}</h4>
        <div className='p-browser'>
            <div className='p-circle'></div> 
            <div className='p-circle'></div>
            <div className='p-circle'></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  )
}

export default Product