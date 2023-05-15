import React from 'react'
import './upPhones.css'

const UpPhones = () => {
  return (
    <>
      <div className='UpPhone'>
        <div className='divtxt'>
          <h1>Download ORUphones app</h1>
          <p style={{fontSize: "30px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, delectus?</p>
        </div>

        <div className='imgdiv'>
        <div className='Store'>
        <img src="https://www.oruphones.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapple_store.18da071a.svg&w=96&q=75" alt="" />
        <img className='img1' src="https://th.bing.com/th/id/OIP.fn_qr7uzdYZfa8zVcFbNYgHaCj?w=337&h=120&c=7&r=0&o=5&dpr=1.4&pid=1.7" alt="" />
        </div>
        <div className='Store'>
          <img src="https://www.oruphones.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapple_store.18da071a.svg&w=96&q=75" alt="" />
          <img className='img1' src="https://th.bing.com/th/id/OIP.8rIr8Pp6N8ffoVJjd1G0LgHaHa?pid=ImgDet&w=800&h=800&rs=1" alt="" />
        </div>
        </div>
      </div>
    </>
  )
}

export default UpPhones