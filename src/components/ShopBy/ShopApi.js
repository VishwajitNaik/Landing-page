import React from 'react'
import Card from './ShopCard'

const items = [
    {
        id: 1,
        imageSrc: process.env.PUBLIC_URL + '/images/img4.jpg',
    },
    {
        id: 2,
        imageSrc: process.env.PUBLIC_URL + '/images/img5.jpg',
    },
    {
        id: 3,
        imageSrc: process.env.PUBLIC_URL + '/images/img6.jpg',
    },
    {
        id: 1,
        imageSrc: process.env.PUBLIC_URL + '/images/img7.jpg',
    },
    {
        id: 2,
        imageSrc: process.env.PUBLIC_URL + '/images/img5.jpg',
    },
    
  ];

const shopapi = () => {
  return (
    <>
    <h3>Shop By</h3>
    <div>
    
    {items.map(item => (
        <Card key={item.id} imageSrc={item.imageSrc} />
      ))}
    </div>
    </>
  )
}

export default shopapi