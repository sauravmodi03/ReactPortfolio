
import '../css/Header.scss';
import {useEffect} from 'react';
import NavMenu from './NavMenu';
import { Link } from 'react-scroll';
import menuLogo from '../img/menu.png';

const Header = () => {

    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 20) document.getElementById("header").classList.add("head-on-scroll");
        else document.getElementById("header").classList.remove("head-on-scroll");
      };
  
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
    }

return( 
        <div className='Header'>
            <header id="header" className="App-header">
                <nav id="smodi"><Link className="scale" to="home" spy={true} smooth={true} duration={500}></Link>smodi</nav>
                <nav id="nav-button"><Link to="#" onClick={openNav}><img src={menuLogo} alt="Menu logo"/></Link></nav>
                <NavMenu/>
            </header>
        </div>
    );
}

export default Header;