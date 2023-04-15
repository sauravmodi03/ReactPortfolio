import {Link}  from 'react-scroll';
import '../css/NavMenu.scss';
import close from '../img/close-l.png';

const closeNav = () => {
    // var menu = document.getElementById("nav-link-wrap");
    // menu.style.width="0";
    // menu.style.left="50%";
    document.getElementById("nav-bg-portrait").classList.remove("nav-greyout");
}

function NavMenu() {
    return (
        <nav id="nav-link-wrap" className='nav-link-wrap -drop-shadow'>
            <Link id="nav-close-btn" to="#" onClick={closeNav}><img src={close} alt="Close logo"/></Link>
            <Link activeClass="active" className="home-nav --nav-font" to="home" spy={true} smooth={true} duration={500}>Home</Link>
            <Link activeClass="active" className="scale about-nav --nav-font" to="about" spy={true} smooth={true} duration={500}>About</Link>
            <Link activeClass="active" className="skills-nav --nav-font scale" to="skills" spy={true} smooth={true} duration={500}>Skills</Link>
            <Link activeClass="active" className="scale project-nav --nav-font" to="project" spy={true} smooth={true} duration={500}>Projects</Link>
            <Link activeClass="active" className="scale work-nav --nav-font" to="work" spy={true} smooth={true} duration={500}>Work</Link>
            <Link activeClass="active" className="scale contact-nav --nav-font" to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
        </nav>
    );
}

export default NavMenu;