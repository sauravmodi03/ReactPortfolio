import './App.css';
import homeLogo from './download.png';
import linkedin from './linkedin.png';
import git from './git.svg';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
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
          <nav></nav>
          <nav>
            <Link to="/"><img src={homeLogo} alt="Home logo"/></Link>
            <Link to="/address">Address</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/personalinfo">Personal Info</Link>
            <Link to="/contact">Contact</Link>
            <nav>
              <Link to="https://www.linkedin.com/in/sauravmodi03/" target="_blank"><img alt="Linked logo" src={linkedin}/></Link>
              <Link to="https://github.com/sauravmodi03" target="_blank"><img alt="Git logo" src={git}/></Link>
            </nav>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home/>}></Route> 
          <Route path="/address" element={<Address/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/personalinfo" element={<PersonalInfo/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <footer>
        </footer>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
