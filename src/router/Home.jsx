import React from 'react'
import './all.css'
import bannerImg from '../assets/64539e138771820ebcb7619d_hero-image.png'

function Home() {
  return (
    <div className='home'>
      <div className='container home_container'>
        <div className="left">
          <p className='left_p'>Eng yaxshi <span>onlayn ta'lim</span> platformasi.</p>
          <h1>Elektron ta’lim <span>tajribangizda</span> darajani ko‘tarish</h1>
          <p className='left_bottom'>Elektron ta’lim ayniqsa ish yoki oilaviy mas’uliyatlar kabi boshqa majburiyatlari bo‘lgan kattalar uchun foydalidir.</p>
          <button className='left_btn'>Boshlash</button>
        </div>
        <div className="right">
          <img src={bannerImg} alt="" />
        </div>
      </div>

    </div> 
  )
}

export default Home