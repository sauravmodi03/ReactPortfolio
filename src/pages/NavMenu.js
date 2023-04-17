import {Link}  from 'react-scroll';
import '../css/NavMenu.scss';
import close from '../img/close-l.png';
import { useState } from 'react';

const closeNav = () => {
    // var menu = document.getElementById("nav-link-wrap");
    // menu.style.width="0";
    // menu.style.left="50%";
    document.getElementById("nav-bg-portrait").classList.remove("nav-greyout");
}

function NavMenu(props) {

    // const handleLanguage = (value) =>{
    //     props.setLanguage(value);
    // }

    const [data, setData] = useState(props.translation);

    const handleTranslation = (language) =>{
        setData(require('../lang/app_'+language+'.json'));
        props.setTranslation(require('../lang/app_'+language+'.json'));
    }

    return (
        <nav id="nav-link-wrap" className='nav-link-wrap -drop-shadow'>
            <Link id="nav-close-btn" to="#" onClick={closeNav}><img src={close} alt="Close logo"/></Link>
            
            <Link activeClass="active" className="home-nav --nav-font" to="home" spy={true} smooth={true} duration={500}>
                <span className='scale'>{props.translation.NavMenu.home}</span>
            </Link>
            <Link activeClass="active" className="scale about-nav --nav-font" to="about" spy={true} smooth={true} duration={500}>
                <span className='scale'>{props.translation.NavMenu.about}</span>
            </Link>
            <Link activeClass="active" className="skills-nav --nav-font scale" to="skills" spy={true} smooth={true} duration={500}>
                <span className='scale'>{props.translation.NavMenu.skills}</span>
            </Link>
            <Link activeClass="active" className="scale project-nav --nav-font" to="project" spy={true} smooth={true} duration={500}>
                <span className='scale'>{props.translation.NavMenu.project}</span>
            </Link>
            <Link activeClass="active" className="scale work-nav --nav-font" to="work" spy={true} smooth={true} duration={500}>
                <span className='scale'>{props.translation.NavMenu.work}</span>
            </Link>
            <Link activeClass="active" className="scale contact-nav --nav-font" to="contact" spy={true} smooth={true} duration={500}>
                <span className='scale'>{props.translation.NavMenu.contact}</span>
            </Link>
            {/* <select onChange={e => handleTranslation(e.target.value)}>
                <option value="en">EN</option>
                <option value="sp">SP</option>
            </select> */}
        </nav>
    );
}

export default NavMenu;