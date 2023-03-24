
import './App.scss';

import bubbles from './img/bubbles.png';


import {Link, Element}  from 'react-scroll';

import Home from './pages/Home';

import React from 'react';
import Address from './pages/Address';
import About from './pages/About';
import NavMenu from './pages/NavMenu';
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
          <div className="bg-bubbles">
            <div className="bg-square"></div>
            <div className="bg-square"></div>
            <div className="bg-square"></div>
            <div className="bg-square"></div>
            <div className="bg-square"></div>
            <div className="bg-square"></div>
          </div>
          <Flyer/>
          <Header/>
          <Element>
            <Home/>
            <About/>
            <Skills/>
            <Address/>
            <Contact/>
          </Element>
      </div>
      
    ); 
  }
}

export default App;
