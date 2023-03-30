
import './App.scss';
import {Link} from 'react-scroll';

import linkedin from './img/in-round-b.png';
import git from './img/gitb.png';
import insta from './img/insta-round-b.png';
import twitter from './img/twit-round-b.png';
import gearw from './img/gear-white.png';
import phoneblack from './img/phoneblack.png';
import markerblack from './img/markerblack.png';
import mailblack from './img/mailblack.png';

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
  }
  

  openNav () {
    var menu = document.getElementById("nav-menu");
    menu.style.width="100%";
  }

  closeNav () {
    if(window.innerWidth <= 800){
      var menu = document.getElementById("nav-menu");
      menu.style.width="0";
    }
  }

  render() {
    return (
      <div id="App" className="App" onScroll={this.onScroll}>
        <Flyer/>
        <Header>
          <div className="bg-bubbles">
            <div className="bg-square"></div>
            <div className="bg-square"></div>
            <div className="bg-square"></div>
            <div className="bg-square"></div>
            <div className="bg-square"></div>
            <div className="bg-square"></div>
          </div>
          <Header/>
        </Header>
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
                <nav id="hire-nav">
                  <Link id="hire-me" to='contact' activeClass="active" className="scale" spy={true} smooth={true} duration={500} >Hire Me</Link>
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
                <span>Copyright</span>
            </div>
            <div className='foo-sec s-4'>

            </div>
          </div>
        </footer>
      </div>
      
    ); 
  }
}

export default App;
