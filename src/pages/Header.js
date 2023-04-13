
import '../css/Header.scss';
import React, {useEffect, useState} from 'react';
import NavMenu from './NavMenu';
import { Link } from 'react-scroll';
import menuLogo from '../img/menu.png';
import { BrowserRouter, Link as RouterLink} from 'react-router-dom';

function Header() {

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
        var menu = document.getElementById("nav-link-wrap");
        menu.style.width="80%";
        menu.style.left="10%";
        document.getElementById("nav-bg-portrait").classList.add("nav-greyout");
    }

    const handleNavMenu = () => {
      var menu = document.getElementById("nav-link-wrap");
      menu.style.width="0";
      menu.style.left="50%";
      document.getElementById("nav-bg-portrait").classList.remove("nav-greyout");
    }

return( 
        <div id="header" className='Header'>
            <header  className="head-wrapper">
                <nav id="smodi">
                  <BrowserRouter>
                    <RouterLink className="smodi-link scale" to="/">SMODI</RouterLink>
                  </BrowserRouter>
                </nav>
                <nav id="nav-button"><Link to="#" onClick={openNav}><img src={menuLogo} alt="Menu logo"/></Link></nav>
                {!navMobile && <NavMenu/>}
            </header>
            { navMobile && <div onClick={handleNavMenu} id='nav-bg-portrait' className='nav-bg-portrait'><NavMenu/></div>}
        </div>
    );
}

export default Header;