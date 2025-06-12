import React from 'react'
import './all.css'
import aboutImg from '../assets/6451ef29fdafeb1d7d1c6995_1.png'

function About() {
  return (
    <div className='about'>
      <div className="container contact_container as">
        <span className='contact_span wd'>Muvaffaqiyat sari boshlang</span>
        <h4 className='contact_h4 yan'>Ta'lim va o'qitish bo'yicha <br /> yetakchi global bozori</h4>
        <div className='contact_flex'>
          <div className="contact_box">
            <img className='page_img' src="https://cdn.prod.website-files.com/640021754b75fb0c4b535941/645218c376c1e7c0922a4dcc_funcact-1.svg" alt="" />
            <p className='contact_p  cl'>25+</p>
            <h6 className='contact_h6 dn half'>Elektron ta'lim bo'yicha yillar tajribasi</h6>
          </div>
          <div className="contact_box">
            <img className='page_img' src="https://cdn.prod.website-files.com/640021754b75fb0c4b535941/645218c34285850eedc19444_funcact-2.svg" alt="" />
            <p className='contact_p  cl'>2k+</p>
            <h6 className='contact_h6 dn half'>Talabalar Hopeedu kurslariga yozildi</h6>
          </div>
          <div className="contact_box">
            <img className='page_img' src="https://cdn.prod.website-files.com/640021754b75fb0c4b535941/645218c469962c5a408a0e62_funcact-3.svg" alt="" />
            <p className='contact_p cl'>170+</p>
            <h6 className='contact_h6 dn half'>Tajribali o'qituvchi xizmati.</h6>
          </div>
          <div className="contact_box">
            <img className='page_img' src="https://cdn.prod.website-files.com/640021754b75fb0c4b535941/645218c478cec92db1e2a3c4_funcact-4.svg" alt="" />
            <p className='contact_p cl'>165+</p>
            <h6 className='contact_h6 dn half'>Innovatsion xorijiy elektron ta'lim kurslari</h6>
          </div>
        </div>
      </div>
        <div className="container about_container mll">
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
      <div className="container contact_container all">
        <span className='contact_span'>Bizning o'qituvchimiz</span>
        <h4 className='contact_h4 yan'>Mutaxassis o'qituvchi</h4>
        <div className='contact_flex'>
          <div className="contact_box teacher">
            <img src="https://cdn.prod.website-files.com/640064a02bd1b696137fa468/64524dc476c1e776e22dd051_justin-jackson.jpg" alt="" />
            <p className='contact_p'>Muhammadsodiq</p>
            <h6 className='contact_h6'>FULL-STACK</h6>
          </div>
          <div className="contact_box teacher">
            <img src="https://cdn.prod.website-files.com/640064a02bd1b696137fa468/64524dc476c1e776e22dd051_justin-jackson.jpg" alt="" />
            <p className='contact_p'>Muhammadsodiq</p>
            <h6 className='contact_h6'>FULL-STACK</h6>
          </div>
          <div className="contact_box teacher">
            <img src="https://cdn.prod.website-files.com/640064a02bd1b696137fa468/64524dc476c1e776e22dd051_justin-jackson.jpg" alt="" />
            <p className='contact_p'> Muhammadsodiq</p>
            <h6 className='contact_h6 dn'>FULL-STACK</h6>
          </div>
          <div className="contact_box teacher">
            <img src="https://cdn.prod.website-files.com/640064a02bd1b696137fa468/64524dc476c1e776e22dd051_justin-jackson.jpg" alt="" />
            <p className='contact_p'>Muhammadsodiq</p>
            <h6 className='contact_h6 dn'>FULL-STACK</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About