import './App.css';
import homeLogo from './img/homewhite.png';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Address from './Components/Address/Address';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import PersonalInfo from './Components/PersonalInfo/Personalnfo';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <nav>
            <Link to="/"><img src={homeLogo} alt="Home logo"/></Link>
            <Link to="/about">About</Link>
            <Link to="/address">Address</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/personalinfo">Personal Info</Link>
            <Link to="/contact">Contact</Link>
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
