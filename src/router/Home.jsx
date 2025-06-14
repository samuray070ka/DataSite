import React, {useState} from 'react'
import './all.css'
import { FaTelegramPlane, FaInstagram, FaYoutube } from 'react-icons/fa';
import bannerImg from '../assets/64539e138771820ebcb7619d_hero-image.png'
import aboutImg from '../assets/6451ef29fdafeb1d7d1c6995_1.png'

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className='home'>
      <div className="social-container">
        <img className='send' alt='Logo' onClick={() => setOpen(!open)} src='https://cdn.prod.website-files.com/640021754b75fb0c4b535941/6451ff63474dcd6e4fc43004_email.svg'/>

        <div className={`social-icons ${open ? 'show' : ''}`}>
          <a href="https://t.me/datasite_akademiyasi"  className="icon telegram"><FaTelegramPlane /></a>
          <a href="https://www.instagram.com/datasite_academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="  className="icon instagram"><FaInstagram /></a>
          <a href="https://www.youtube.com/@Datasiteacademy"  className="icon youtube"><FaYoutube /></a>
        </div>
      </div>
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
      <div className="div">
      <div className="container category_container">
        <span className='category_span'>Barcha kurslar toifalari</span>
        <h4 className='category_h4' >Kurslar toifalari</h4>
        <div className='category_flex'>
          <div className="category_box">
          <img src="https://cdn.prod.website-files.com/640064a02bd1b696137fa468/64520d1def45715a219a99fc_printing.svg" alt="" />
          <h2 className='category_h2'>Printing</h2>
          <p className='category_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum recusandae placeat .</p>
        </div>
        <div className="category_box">
          <img src="https://cdn.prod.website-files.com/640064a02bd1b696137fa468/64520d349767cee41c573d65_ui.svg" alt="" />
          <h2 className='category_h2'>Design</h2>
          <p className='category_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum recusandae placeat .</p>
        </div>
        <div className="category_box">
          <img src="https://cdn.prod.website-files.com/640064a02bd1b696137fa468/64520d42fd81da11c2dd7c51_brand.svg" alt="" />
          <h2 className='category_h2'>UI / UX</h2>
          <p className='category_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum recusandae placeat .</p>
        </div>
        <div className="category_box">
          <img src="https://cdn.prod.website-files.com/640064a02bd1b696137fa468/64520d42fd81da11c2dd7c51_brand.svg" alt="" />
          <h2 className='category_h2'>Branding</h2> 
          <p className='category_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum recusandae placeat .</p>
        </div>
        </div>
      </div>
      </div>
      <div className="container courses_container">
        <span className="category_span">Eng zo'r kurslar</span>
        <h4 className="category_h4">Bizning kurslar</h4>
        <div className="courses_flex">
          <div className="course_card">
            <img src="https://cdn.prod.website-files.com/640064a02bd1b696137fa468/6405653400b83d12123afec3_2.png" alt="Figma to HubSpot CMS" />
            <div className="course_info">
              <span className="course_date">June 11, 2025</span>
              <h3 className="course_title">Learn Figma to HubSpot CMS</h3>
              <p className="course_details">Beginner to Advanced | 17 lessons | 50 lessons</p>
              <div className="course_rating">⭐ 5.0</div>
              <div className="course_price">$50.00 USD</div>
              <button className="course_btn">Buy Course</button>
            </div>
          </div>
          <div className="course_card">
            <img src="https://cdn.prod.website-files.com/640064a02bd1b696137fa468/6405653400b83d12123afec3_2.png" alt="C Programming Language" />
            <div className="course_info">
              <span className="course_date">June 11, 2025</span>
              <h3 className="course_title">C Programming Language Foundations</h3>
              <p className="course_details">16 lessons | 20 lessons</p>
              <div className="course_rating">⭐ 4.0</div>
              <div className="course_price">$85.00 USD</div>
              <button className="course_btn">Buy Course</button>
            </div>
          </div>
          <div className="course_card">
            <img src="https://cdn.prod.website-files.com/640064a02bd1b696137fa468/6405653400b83d12123afec3_2.png" alt="Leadership and Management" />
            <div className="course_info">
              <span className="course_date">June 11, 2025</span>
              <h3 className="course_title">Leadership and Management</h3>
              <p className="course_details">13 lessons | 30 lessons</p>
              <div className="course_rating">⭐ 4.7</div>
              <div className="course_price">$120.00 USD</div>
              <button className="course_btn">Buy Course</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container contact_container">
        <span className='contact_span'>Biz bilan bog'lanish</span>
        <h4 className='contact_h4'>Biz bilan bog'laning. Xabaringizni <br /> kutamiz.</h4>
        <div className='contact_flex'>
          <div className="contact_box">
            <img src="https://cdn.prod.website-files.com/640021754b75fb0c4b535941/6451ff1978cec9e274e0f2dc_map.svg" alt="" />
            <p className='contact_p'>Manzil</p>
            <h6 className='contact_h6'>Namangan shahar, chorsu davlat xizmatlari yonida</h6>
          </div>
          <div className="contact_box">
            <img src="https://cdn.prod.website-files.com/640021754b75fb0c4b535941/6451ff43eebf58bb8246a3c0_phone.svg" alt="" />
            <p className='contact_p'>Telefon</p>
            <h6 className='contact_h6'>Markaz aperatori : +998 95 061 64 66</h6>
          </div>
          <div className="contact_box">
            <img src="https://cdn.prod.website-files.com/640021754b75fb0c4b535941/6451ff63474dcd6e4fc43004_email.svg" alt="" />
            <p className='contact_p'>Email manzil</p>
            <h6 className='contact_h6 dn'>markelofmuhammadsodiq@gmail.com</h6>
          </div>
        </div>
      </div>
      <div className="container post_container">
        <div className="post_left">
          <img src="https://assets.website-files.com/640021754b75fb0c4b535941/64099727142ec4ea44a18a0e_image.png" alt="" />
        </div>
        <div className="post_right">
          <span className='post_span'>Biz bilan bog'lanish</span>
          <h1 className='post_h1'>Biz bilan bog'laning. Xabaringizni kutamiz.</h1>
          <input className='input_text' type="text" placeholder='Ismingiz...' />
          <input className='input_text ml' type="text" placeholder='Familyangiz...' /><br />
          <input className='input_email' type="email" placeholder='Email...'/><br />
          <input className='input_joy' type="text" placeholder='Qanday xabar yozmoqchisiz...'/><br />
          <button className='post_btn'>Jo'natish</button>
        </div>
      </div>
    </div> 
  )
}

export default Home