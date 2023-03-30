
import '../css/About.scss';
import React, {useEffect,  useRef } from 'react';
import about from '../img/about.png';
import arrow from '../img/arrow-white.png';
import download from '../img/download-white.png';
import {Link}  from "react-router-dom";
import Resume from '../data/Resume.pdf';
import Label from './Label';

export default function About() {


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
                    <span>
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