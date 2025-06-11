import './App.css';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './router/Home';
import Courses from './router/Courses';
import Contact from './router/Contact';
import Blog from './router/Blog';
import About from './router/About';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/courses' element={<Courses/>}/>
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
