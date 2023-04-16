
import '../css/Header.scss';
import React, {useEffect, useState} from 'react';
import NavMenu from './NavMenu';
import { Link } from 'react-scroll';
import menu from '../img/menu-d.png';
import menuL from '../img/menu-l.png';
import { BrowserRouter, Link as RouterLink} from 'react-router-dom';

function Header(props) {

    const [navMobile, setNavMobile] = useState(window.matchMedia("only screen and (max-width: 480px) and (min-height:600px) and (orientation: portrait)").matches);

    useEffect(() => {

      const handleScroll = () => {
        if(window.scrollY > 20) {
          document.getElementById("header").classList.add("head-on-scroll");
        } else {
          document.getElementById("header").classList.remove("head-on-scroll");
        }

        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        
        document.getElementById("progress-bar").style.width = scrollPercentRounded + '%';
      };

      window.matchMedia("only screen and (max-width: 480px) and (min-height:600px) and (orientation: portrait)").addEventListener("change", e=> 
      setNavMobile(e.matches));
  
      window.addEventListener('scroll', handleScroll);
      handleScroll();
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const openNav = () => {
        // var menu = document.getElementById("nav-link-wrap");
        // menu.style.width="80%";
        // menu.style.left="10%";
        document.getElementById("nav-bg-portrait").classList.add("nav-greyout");
        document.getElementById("close-logo").classList.toggle("rotate-anitclock");
    }

    const handleNavMenu = () => {
      // var menu = document.getElementById("nav-link-wrap");
      // menu.style.width="0";
      // menu.style.left="50%";
      document.getElementById("nav-bg-portrait").classList.remove("nav-greyout");
    }

return( 
        <div id="header" className='Header'>
            <header  className="head-wrapper">
                <nav id="smodi">
                  <BrowserRouter>
                    <RouterLink className="smodi-link" to="/">SMODI</RouterLink>
                  </BrowserRouter>
                </nav>
                <nav id="nav-button"><Link to="#" onClick={openNav}><img id="close-logo" src={props.darkTheme ? menuL : menu} alt="Menu logo"/></Link></nav>
                {!navMobile && <NavMenu language={props.language}/>}
            </header>
            { navMobile && <div onClick={handleNavMenu} id='nav-bg-portrait' className='nav-bg-portrait'><NavMenu language={props.language}/></div>}
        </div>
    );
}

export default Header;