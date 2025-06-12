import React from 'react'
import './components.css'
import logo from '../assets/IMG_20241111_182703_722-removebg.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="container container_navbar">
        <Link to={'/'} className='link'>
            <img className='navbar_img' src={logo} alt="" />
        </Link>
      <h1 className='navbar_flex'></h1>
      <ul className='collaction'>
        <Link className='link' to={'/'}>
          <li className='item'>Bosh sahifa</li>
        </Link>
        <Link className='link' to={'/about'}>
          <li className='item'>Biz haqimizda</li>
        </Link>
        <Link className='link' to={'/courses'}>
          <li className='item'>Kurslar</li>
        </Link>
      </ul>
      <button className='navbar_btn'>Ro'yxatdan o'tish</button>
      <button className='navbar_bars'>&#9776;</button>
      </div>
    </div>
  )
}

export default Navbar