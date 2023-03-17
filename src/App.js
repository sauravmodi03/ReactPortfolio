import './App.css';
import homeLogo from './img/homewhite.png';
import menuLogo from './img/menu.png';
import closeLogo from './img/closew.png';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Address from './Components/Address/Address';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import PersonalInfo from './Components/PersonalInfo/Personalnfo';
import Contact from './Components/Contact/Contact';


const openNav = () => {
  var menu = document.getElementById("nav-menu");
  menu.style.width="100%";
  document.getElementById("App").style.backgroundColor = "rgba(0,0,0,0.4)";
}

const closeNav = () => {
  var menu = document.getElementById("nav-menu");
  menu.style.width="0";
}

function App() {
  return (
    <div id="App" className="App">
      <BrowserRouter>
        <header className="App-header">
          <nav id="nav-button"><Link onClick={openNav}><img src={menuLogo} alt="Menu logo"/></Link></nav>
          <nav id="nav-menu" className='nav-menu'>
            <Link id="close-nav-btn" onClick={closeNav}><img alt="Close logo" src={closeLogo}/></Link>
            <Link className='scale' onClick={closeNav} to="/"><img src={homeLogo} alt="Home logo"/></Link>
            <Link className='scale' onClick={closeNav} to="/about">About</Link>
            <Link className='scale' onClick={closeNav} to="/address">Address</Link>
            <Link className='scale' onClick={closeNav} to="/skills">Skills</Link>
            <Link className='scale' onClick={closeNav} to="/personalinfo">Personal Info</Link>
            <Link className='scale' onClick={closeNav} to="/contact">Contact</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home/>}></Route> 
          <Route path="/about" element={<About/>}></Route>
          <Route path="/address" element={<Address/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/personalinfo" element={<PersonalInfo/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
