
import './App.scss';

import bubbles from './img/bubbles.png';


import {Link, Element}  from 'react-scroll';

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
        </footer>
      </div>
      
    ); 
  }
}

export default App;
