import React from 'react'
import './Card.css'

const Crad = ({ id, imageSrc, text }) => {
  return (
    <>  
        
        <div className='container'>
        <div  className='card'>
                <img src={imageSrc} alt={`Item ${id}`} />
            </div>
        </div>
    </>
  )
}

export default Crad