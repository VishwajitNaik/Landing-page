import React from 'react'
import Card from "./Crad"
import './Card.css'

const items = [
    {
        id: 1,
        imageSrc: process.env.PUBLIC_URL + '/bestdeals/img1.jpg',
        rate: 110000,
        title: "Apple Iphone 13",
        gb : 128,
        con : "condition Good",

    },
    {
        id: 2,
        imageSrc: process.env.PUBLIC_URL + '/bestdeals/img2.jpg',
        rate: 110000,
        title: "Apple Iphone 13",
        gb : 128,
        con : "condition Good",
    },
    {
        id: 3,
        imageSrc: process.env.PUBLIC_URL + '/bestdeals/img3.jpg',
        rate: 546546,
        title: "Apple Iphone 13",
        gb : 128,
        con : "condition Good",
    },
    {
        id: 1,
        imageSrc: process.env.PUBLIC_URL + '/bestdeals/img4.jpg',
        rate: 66545,
        title: "Apple Iphone 13",
        gb : 128,
        con : "condition Good",
    },
    {
        id: 2,
        imageSrc: process.env.PUBLIC_URL + '/bestdeals/img5.jpg',
        rate: 342121,
        title: "Apple Iphone 13",
        gb : 128,
        con : "condition Good",
    },
    {
        id: 3,
        imageSrc: process.env.PUBLIC_URL + '/bestdeals/img3.jpg',
        rate: 2135,
        title: "Apple Iphone 13",
        gb : 128,
        con : "condition Good",
    },
    {
        id: 1,
        imageSrc: process.env.PUBLIC_URL + '/bestdeals/img7.jpg',
        rate: 56455,
        title: "Apple Iphone 13",
        gb : 128,
        con : "condition Good",
    },
    {
        id: 2,
        imageSrc: process.env.PUBLIC_URL + '/bestdeals/img8.jpg',
        rate: 26233,
        title: "Apple Iphone 13",
        gb : 128,
        con : "condition Good",
    },
    {
        id: 3,
        imageSrc: process.env.PUBLIC_URL + '/bestdeals/img1.jpg',
        rate: 34654,
        title: "Apple Iphone 13",
        gb : 128,
        con : "condition Good",
    },
    {
        id: 1,
        imageSrc: process.env.PUBLIC_URL + '/bestdeals/img2.jpg',
        rate: 36645,
        title: "Apple Iphone 13",
        gb : 128,
        con : "condition Good",
    },
    {
        id: 2,
        imageSrc: process.env.PUBLIC_URL + '/bestdeals/img3.jpg',
        rate: 4564,
        title: "Apple Iphone 13",
        gb : 128,
        con : "condition Good",
    },
    {
        id: 3,
        imageSrc: process.env.PUBLIC_URL + '/bestdeals/img4.jpg',
        rate: 56431,
        title: "Apple Iphone 13",
        gb : 128,
        con : "condition Good",
    },
  ];

const CardGroup = () => {
  return (
    <>
    <h2>Best Deal near You</h2>
    <div>
    
    {items.map(item => (
        <Card key={item.id} imageSrc={item.imageSrc}  rate={item.rate} title = {item.title} gb = {item.gb} con = {item.con} />
      ))}
    </div>
    </>
  )
}

export default CardGroup