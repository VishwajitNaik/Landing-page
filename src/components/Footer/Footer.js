/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Footer.css'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaYoutubeSquare, FaEnvelopeSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        <div className='FooterContainer'>
            <h1>SIGN UP FOR NEWSLETTER</h1>
            <div className='inpt'>
            <input type="text" placeholder='Enter Your Email address' />
            <button>Subscribe</button>
            </div>
        
        <div className='sell'>
            <p>Sell Samsung Phone | Sell Apple Phone | Sell OnePlus Phone | Sell Asus Phone | Sell Xiaomi Phone | Sell Oppo Phone | Sell LG Phone | Sell Realme Phone | Sell Poco Phone | Sell IQOO Phone | Sell Sony Phone | Sell Google Phone | Sell Honor Phone | Sell Infinix Phone | Sell Tecno Phone | Sell Vivo Phone | Sell Micromax Phone | Sell Nokia Phone | Sell Lenovo Phone | Sell Motorola Phone | Sell HTC Phone | Sell Blackberry Phone | Sell Panasonic Phone | Sell Gionee Phone | Sell Karbonn Phone | Sell Lava Phone | Sell Intex Phone | Sell Meizu Phone | Sell Huawei Phone | Sell ZTE Phone | Sell Alcatel Phone</p>
        </div>
        <div className='services'>
        <div>
            <h2>Customer Services</h2>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms Oof  service</li>
                <li>FAQs</li>
            </ul>
            </div>
        <div>
            <h2>Links</h2>
            <ul>
                <li>Blog</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='Download'>
            <h2>DOWNLOAD ORUphones App</h2>
            <div className='store'>
                <img src="https://th.bing.com/th?id=OIP.MBeWM59YWDLMawUKkIwD-QHaH6&w=241&h=258&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2" alt="" />
                <img src="https://yourwellbeingtribe.com/wp-content/uploads/2021/07/apple-store-icon.png" alt="" />
            </div>
            <p>Follow us on Social Media</p>
            <ul>
                <li><a href="#"><FaFacebookSquare size={25} color="#3b5998" /></a> </li>
                <li><a href="#"><FaTwitterSquare size={25} color="#3b5998" /></a></li>
                <li><a href=""><FaLinkedin size={25} color="#3b5998" /></a></li>
                <li><a href=""><FaYoutubeSquare size={25} color="#3b5998" /></a></li>
                <li><a href=""><FaEnvelopeSquare size={25} color="#3b5998" /></a></li>

            </ul>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Footer