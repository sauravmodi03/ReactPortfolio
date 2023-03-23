
import Media from '../css/Media.scss';
import '../css/Header.scss';
import React, {useEffect, useState} from 'react';
import NavMenu from './NavMenu';
import { Link } from 'react-scroll';
import menuLogo from '../img/menu.png';

function Header() {

    const [navMobile, setNavMobile] = useState(window.matchMedia("only screen and (max-width: 480px) and (min-height:600px) and (orientation: portrait)").matches);
    

    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 20) document.getElementById("header").classList.add("head-on-scroll");
        else document.getElementById("header").classList.remove("head-on-scroll");
      };

    //   const handleMedia = () => {
    //     window.matchMedia(Media.iphonePortrait).addEventListener("change", e=> 
    //         setNavMobile(e.matches)
    //     );
    //   }

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
        document.getElementById("nav-bg-portrait").classList.toggle("nav-greyout");
    }

    const handleNavMenu = () => {
      var menu = document.getElementById("nav-link-wrap");
      menu.style.width="0";
      menu.style.left="50%";
      document.getElementById("nav-bg-portrait").classList.toggle("nav-greyout");
    }

return( 
        <div className='Header'>
            <header id="header" className="App-header">
                <nav id="smodi"><Link className="scale" to="home" spy={true} smooth={true} duration={500}></Link>smodi</nav>
                <nav id="nav-button"><Link to="#" onClick={openNav}><img src={menuLogo} alt="Menu logo"/></Link></nav>
                {!navMobile && <NavMenu/>}
            </header>
            { navMobile && <div onClick={handleNavMenu} id='nav-bg-portrait'><NavMenu/></div>}
        </div>
    );
}

export default Header;