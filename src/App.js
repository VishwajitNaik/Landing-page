import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider/Slider'
import CardGroup from './components/Card/CardGroup'
import BestDealapi from './components/BestDeals/bestDealapi'
import ShopCard from './components/ShopBy/ShopApi.js';
import UpPhones from './components/upPhone/UpPhones';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Slider />
    <CardGroup />
    <BestDealapi />
    <ShopCard />
    <UpPhones />
    <AboutUs />
    <Footer />

    </>
  );
}

export default App;
