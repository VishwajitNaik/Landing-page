import React from 'react'
import './Card.css'

const Crad = ({ imageSrc, id, rate, title, gb, con }) => {
  return (
    <>  
        
        <div className='main'>
        <div  className='bstcard'>
                <img className='imges' src={imageSrc} alt={`Item ${id}`} />
            </div>
            <h4>${rate}</h4>
            <div >
                <p>{title}</p>
            </div>
            <div className='content'>
            <p>GB {gb}</p>
            <span>{con}</span>
            </div>
            <div >
            
            </div>
            
        </div>
    </>
  )
}

export default Crad