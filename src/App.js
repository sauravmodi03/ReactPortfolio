
import './App.scss';
import {Link} from 'react-scroll';

import linkedin from './img/in-d.png';
import git from './img/git-d.png';
import insta from './img/insta-d.png';
import twitter from './img/twit-d.png';
import www from './img/www-d.png';
import phoneblack from './img/call-d.png';
import markerblack from './img/marker-d.png';
import mailblack from './img/mail-d.png';
import arrow from './img/arrow-up-d.png';


import linkedinL from './img/in-l.png';
import gitL from './img/git-l.png';
import instaL from './img/insta-l.png';
import twitterL from './img/twit-l.png';
import wwwL from './img/www-l.png';
import phoneblackL from './img/call-l.png';
import markerblackL from './img/marker-l.png';
import mailblackL from './img/mail-l.png';
import arrowL from './img/arrow-up-l.png';


import sun from './img/sun-w.png';
import moon from './img/moon-d.png';
import ReactLoader from 'react-loading';

import { BrowserRouter, Link as RouterLink} from 'react-router-dom';

import Home from './pages/Home';

import React, { useEffect } from 'react';
import Work from './pages/Work';
import About from './pages/About';
import Skills from './pages/Skills';
import Header from './pages/Header';
import Contact from './pages/Contact';
import Flyer from './Components/Flyer/Flyer';
import { useState } from 'react';


export default function App() {

  const [darkTheme, setDarkTheme] = useState(false);
  const [loader, setLoader] = useState(false);
  
  const toggleTheme = () => {
    var element = document.querySelector(".App");
    element.classList.toggle("dark-theme");
    setDarkTheme(!darkTheme);
  }

  useEffect(() => function(){
    sleep(3000).then(() => {
      setLoader(false);
    })
  });

  const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  }


    return (
      loader ? 
      <div className='app-loader'><ReactLoader type={"bars"} color={"#3c415e"} height={"300px"} width={"200px"}/></div>
      :
      <div id="App" className="App" >
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <Flyer darkTheme={darkTheme}/>
        <div className="bg-bubbles">
          <div className="bg-square"></div>
          <div className="bg-square"></div>
          <div className="bg-square"></div>
          <div className="bg-square"></div>
          <div className="bg-square"></div>
          <div className="bg-square"></div>
        </div>
        <div id="progress-bar-wrapper"><div id="progress-bar"></div></div>
        <Header darkTheme={darkTheme}/>
        <main className='main'>
            <button className='toggle-theme' name='Theme' onClick={toggleTheme}><img src={darkTheme ? sun : moon} alt="Theme Logo"/></button>
            <Home darkTheme={darkTheme}/>
            <About darkTheme={darkTheme}/>
            <Skills darkTheme={darkTheme}/>
            <Work darkTheme={darkTheme}/>
            <Contact darkTheme={darkTheme}/>
            <Link id="top-scroll-wrapper" className='top-scroll-wrapper' to='home' spy={true} smooth={true} duration={500}>
                <div className='top-scroll'><img src={darkTheme ? arrowL : arrow} alt="Arrow logo"/></div>
            </Link>
        </main>
        <footer>
          <div className='foot-container'>
            <div className='foo-sec s-1'>
                <span>WORK WITH ME</span>
                <span>Hi There</span>
                <nav id="foot-nav" className='foot-nav'>
                  <Link className="scale" to="home" spy={true} smooth={true} duration={500}>Home</Link>
                  <Link className="scale" to="about" spy={true} smooth={true} duration={500}>About</Link>
                  <Link className="scale" to="skills" spy={true} smooth={true} duration={500}>Skills</Link>
                  <Link className="scale" to="work" spy={true} smooth={true} duration={500}>Work</Link>
                </nav>
            </div>
            <div className="foo-sec s-2">
                  <label>Contact information.</label>
                  <article className='foo-contact'>
                      <div className="foo-c-w">
                          <img src={darkTheme ? markerblackL : markerblack} alt=''/>
                          <div className='info-val'>400 E 33RD ST, Chicago, Illinoi - 60616, USA</div>
                      </div>
                      <div className="foo-c-w">
                          <img src={darkTheme ? mailblackL : mailblack} alt=''/>
                          <div className='info-val'>sauravmodi03@gmail.com</div>
                      </div>
                      <div className="foo-c-w">
                          <img src={darkTheme ? wwwL : www} alt=''/>
                          <div className='info-val'>https://www.smodi.co.in</div>
                      </div>
                      <div className="foo-c-w">
                          <img src={darkTheme ? phoneblackL : phoneblack} alt=''/>
                          <div className='info-val'>+1 312 478 1958</div>
                      </div>
                  </article>
              </div>
            <div className='foo-sec s-3'>
                <span>Follow Me</span>
                <span>
                  <BrowserRouter>
                      <nav id="foot-links-wrap" className='foot-links-wrap'>
                          <RouterLink className='scale' to="https://www.linkedin.com/in/sauravmodi03/" target="_blank"><img alt="Linked logo" src={darkTheme ? linkedinL : linkedin}/></RouterLink>
                          <RouterLink className='scale' to="https://github.com/sauravmodi03" target="_blank"><img alt="Git logo" src={darkTheme ? gitL : git}/></RouterLink>
                          <RouterLink className='scale' to="https://www.instagram.com/saurav.modi/" target="_blank"><img alt="Insta logo" src={darkTheme ? instaL : insta}/></RouterLink>
                          <RouterLink className='scale' to="https://twitter.com/sauravmodi03" target="_blank"><img alt="Twitter logo" src={darkTheme ? twitterL : twitter}/></RouterLink>
                      </nav>
                  </BrowserRouter>
                </span>
                <span className='copyright'>
                  <span> © 2023 by Saurav Modi. All rights reserved.</span>
                </span>
            </div>
          </div>
        </footer>
      </div>
    ); 
  }

