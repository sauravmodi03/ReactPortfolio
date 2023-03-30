
import '../css/About.scss';
import React, {useEffect,  useRef } from 'react';
import about from '../img/about.png';
import arrow from '../img/arrow-white.png';
import download from '../img/download-white.png';
import {Link}  from "react-router-dom";
import Resume from '../data/Resume.pdf';
import Label from './Label';

export default function About() {

    const innerWidth = document.documentElement.clientWidth;
    const innerHeight = document.documentElement.clientHeight;

    document.addEventListener('scroll',function(){
        var info = document.querySelector(".about-info-bg");
        var pic = document.querySelector(".about-pic");
        const infoY = info.getBoundingClientRect().y;
        const elementHeight = info.getBoundingClientRect().height;

        if(innerHeight > infoY + elementHeight * 2/3){
            info.style.animation = "slideInLeft-aboutinfo 1.5s forwards";
            pic.style.animation = "slideInLeft-aboutpic 1.5s forwards";
        }

        var resumeLink = document.querySelector(".resumeLink");
        const resumeLinkY = resumeLink.getBoundingClientRect().y;
        const resumeHeight = resumeLink.getBoundingClientRect().height;
        if(innerHeight > resumeLinkY + resumeHeight * 2/3){
            resumeLink.style.animation = "resumeSlideInBottom 1.5s forwards";
        }

    });

    return (
    <div id="about" className='About flex-top-padding'>
            <Label name="ABOUT"></Label>
            <span className='about-info -drop-shadow'>
                <article>
                    <span className='about-info-bg'>A full stack developer with a deep understanding of multiple programming 
                        languages including HTML, CSS, JavaScript, and Java. Along with my proficiency in these languages, I am also 
                        experienced in utilizing popular frameworks like Angular, React, and Bootstrap to create robust and efficient 
                        solutions. My skillset allows me to deliver high-quality solutions that meet the needs of clients and end-users 
                        alike. I stay up-to-date with the latest trends and technologies to ensure that my work remains innovative 
                        and effective.
                    </span>
                    <span className='about-pic'>
                        <img src={about} alt="About logo"></img>
                    </span>
                </article>
                <a href={Resume} className="resumeLink scale" download="Resume_SauravModi">
                    <span>Resume</span>
                    <div className='download-wrapper'>
                        <img src={arrow} alt="arrow logo"/>
                    </div>
                </a>
            </span>
    </div>
    );
}

// export default About;