
import './App.scss';
import {Link} from 'react-scroll';

import linkedin from './img/in-round-b.png';
import git from './img/gitb.png';
import insta from './img/insta-round-b.png';
import twitter from './img/twit-round-b.png';
import phoneblack from './img/phoneblack.png';
import markerblack from './img/markerblack.png';
import mailblack from './img/mailblack.png';
import copyright from './img/copy-black.png';

import { BrowserRouter, Link as RouterLink} from 'react-router-dom';

import Home from './pages/Home';

import React from 'react';
import Work from './pages/Work';
import About from './pages/About';
import Skills from './pages/Skills';
import Header from './pages/Header';
import Contact from './pages/Contact';
import Flyer from './Components/Flyer/Flyer';

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {scrollTop: 0}
  }

  onScroll = () => {
    console.log("scrolled")
    const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
    const scrollTop = this.myRef.current.scrollTop
    console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
    this.setState({
      scrollTop: scrollTop
    })

      let scrollToTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scrollToTop / (docHeight - winHeight);
      let scrollPercentRounded = Math.round(scrollPercent * 100);
      document.getElementById("progress-bar").style.width = scrollPercentRounded + '%';
  }


  render() {
    return (
      <div id="App" className="App" onScroll={this.onScroll}>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <Flyer/>
        <div className="bg-bubbles">
          <div className="bg-square"></div>
          <div className="bg-square"></div>
          <div className="bg-square"></div>
          <div className="bg-square"></div>
          <div className="bg-square"></div>
          <div className="bg-square"></div>
        </div>
        <div id="progress-bar-wrapper"><div id="progress-bar"></div></div>
        <Header/>
        <main className='main'>
            <Home/>
            <About/>
            <Skills/>
            <Work/>
            <Contact/>
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
                          <img src={markerblack} alt=''/>
                          <div className='info-val'>400 E 33RD ST, Chicago, Illinoi - 60616, USA</div>
                      </div>
                      <div className="foo-c-w">
                          <img src={mailblack} alt=''/>
                          <div className='info-val'>sauravmodi03@gmail.com</div>
                      </div>
                      <div className="foo-c-w">
                          <img src={markerblack} alt=''/>
                          <div className='info-val'>Website</div>
                      </div>
                      <div className="foo-c-w">
                          <img src={phoneblack} alt=''/>
                          <div className='info-val'>+1 312 478 1958</div>
                      </div>
                  </article>
              </div>
            <div className='foo-sec s-3'>
                <span>Connect</span>
                <span>
                  <BrowserRouter>
                      <nav id="foot-links-wrap" className='foot-links-wrap'>
                          <RouterLink className='scale' to="https://www.linkedin.com/in/sauravmodi03/" target="_blank"><img alt="Linked logo" src={linkedin}/></RouterLink>
                          <RouterLink className='scale' to="https://github.com/sauravmodi03" target="_blank"><img alt="Git logo" src={git}/></RouterLink>
                          <RouterLink className='scale' to="https://www.instagram.com/saurav.modi/" target="_blank"><img alt="Insta logo" src={insta}/></RouterLink>
                          <RouterLink className='scale' to="https://twitter.com/sauravmodi03" target="_blank"><img alt="Twitter logo" src={twitter}/></RouterLink>
                      </nav>
                  </BrowserRouter>
                </span>
                <span className='copyright'><img src={copyright} alt="Copyright logo"/>Copyright</span>
            </div>
          </div>
        </footer>
      </div>
      
    ); 
  }
}

export default App;
