import React from 'react'
import './all.css'
import bannerImg from '../assets/64539e138771820ebcb7619d_hero-image.png'
import aboutImg from '../assets/6451ef29fdafeb1d7d1c6995_1.png'

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
      <div className="container about_container">
        <div className='about_left'>
          <span className='about_span'>Biz haqimizda</span>
          <h3 className='about_h3'>Keyingi bosqichdagi elektron kursimiz haqida.</h3>
          <p className='about_p'>E-learning o‘quvchilarga kurs materiallarini o‘z vaqtida ko‘rib chiqish va topshiriqlarni o‘zlariga qulay jadval asosida bajarish imkonini beradi. Bu ayniqsa kattalar uchun juda foydalidir.</p>
          <div className='about_box'>
            <div className='box_child'>
              <span>👩🏻‍🎓</span>
              <h4>Hisob yaratish</h4>
            </div>
            <p>Elektron ta’lim an’anaviy sinf xonalariga bo‘lgan ehtiyojni yo‘q qiladi, bu esa saqlab turish uchun qimmatga tushishi mumkin.</p>
          </div>

          <div className='about_box mb'>
            <div className='box_child'>
              <span>👩🏻‍🎓</span>
              <h4>Hisob yaratish</h4>
            </div>
            <p>Elektron ta’lim an’anaviy sinf xonalariga bo‘lgan ehtiyojni yo‘q qiladi, bu esa saqlab turish uchun qimmatga tushishi mumkin.</p>
          </div>
          <button className='left_btn'>Boshlash</button>
        </div>

        <div className='about_right'>
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </div> 
  )
}

export default Home