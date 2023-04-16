import {Link}  from 'react-scroll';
import '../css/NavMenu.scss';
import close from '../img/close-l.png';

const closeNav = () => {
    // var menu = document.getElementById("nav-link-wrap");
    // menu.style.width="0";
    // menu.style.left="50%";
    document.getElementById("nav-bg-portrait").classList.remove("nav-greyout");
}

function NavMenu(props) {

    console.log(props.language.NavMenu.home);

    return (
        <nav id="nav-link-wrap" className='nav-link-wrap -drop-shadow'>
            <Link id="nav-close-btn" to="#" onClick={closeNav}><img src={close} alt="Close logo"/></Link>
            
            <Link activeClass="active" className="home-nav --nav-font" to="home" spy={true} smooth={true} duration={500}>
                <span className='scale'>{props.language.NavMenu.home}</span>
            </Link>
            <Link activeClass="active" className="scale about-nav --nav-font" to="about" spy={true} smooth={true} duration={500}>
                <span className='scale'>{props.language.NavMenu.about}</span>
            </Link>
            <Link activeClass="active" className="skills-nav --nav-font scale" to="skills" spy={true} smooth={true} duration={500}>
                <span className='scale'>{props.language.NavMenu.skills}</span>
            </Link>
            <Link activeClass="active" className="scale project-nav --nav-font" to="project" spy={true} smooth={true} duration={500}>
                <span className='scale'>{props.language.NavMenu.project}</span>
            </Link>
            <Link activeClass="active" className="scale work-nav --nav-font" to="work" spy={true} smooth={true} duration={500}>
                <span className='scale'>{props.language.NavMenu.work}</span>
            </Link>
            <Link activeClass="active" className="scale contact-nav --nav-font" to="contact" spy={true} smooth={true} duration={500}>
                <span className='scale'>{props.language.NavMenu.contact}</span>
            </Link>
            <select >
                <option value="en">EN</option>
                <option value="other">Other</option>
            </select>
        </nav>
    );
}

export default NavMenu;