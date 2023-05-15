import React from 'react'
import './ShopCard.css'

const ShopCard = ({ id, imageSrc, text }) => {
  return (
    <div className='container'>
        <img src={imageSrc} alt={`Item ${id}`} />
    </div>
        
  )
}

export default ShopCard