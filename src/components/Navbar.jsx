import React from 'react'
import './components.css'
import logo from '../assets/IMG_20241111_182703_722-removebg.png'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="container container_navbar">
      <img className='navbar_img' src={logo} alt="" />
      <h1 className='navbar_flex'></h1>
      <ul className='collaction'>
        <li className='item'>Bosh sahifa</li>
        <li className='item'>Biz haqimizda</li>
        <li className='item'>Kurslar</li>
        <li className='item'>Blog</li>
        <li className='item'></li>
      </ul>
      <button className='navbar_btn'>Ro'yxatdan o'tish</button>
      <button className='navbar_bars'>&#9776;</button>
      </div>
    </div>
  )
}

export default Navbar