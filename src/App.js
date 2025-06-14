import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './router/Home';
import Courses from './router/Courses';
import About from './router/About';
import GlobalStyle from './GlobalStyle';
import Blog from './router/Blog';
import Admin from './router/Admin';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </div>
  );
}

export default App;
