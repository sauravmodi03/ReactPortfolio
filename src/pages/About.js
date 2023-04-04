
import '../css/About.scss';
import React, {useEffect,  useRef } from 'react';
import about from '../img/self.png';
import arrow from '../img/arrow-white.png';
import resumeqr from '../img/ResumeQR.png';
import QRlogo from '../img/QR-black.png';
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

    const manageQR = () => {
        var qrcode = document.querySelector(".resume-qr");
        qrcode.classList.toggle("show-qr");
    }

    return (
    <div id="about" className='About flex-top-padding'>
            <Label name="ABOUT"></Label>
            <div className='about-info -drop-shadow'>
                <article>
                    <section>
                        <span className='info-l1 about-info-bg'>
                            Hi, I'm Saurav
                        </span>
                        <span className='info-l1 about-info-bg'>
                            Full Stack Developer!
                        </span>
                    </section>
                    <span className='about-pic'>
                        <img src={about} alt="About logo"></img>
                    </span>
                    <section className=''>
                        <span> About Me</span>
                        <span> Languages I speak: Java, HTML, CSS, JavaScript, Python</span>
                        <span> Framework knowledge: Spring, React, Angular, Bootstrap</span>
                        <span> Tools experience: Intellij, Eclipse, Pycharm, VSCode, GiBash</span>
                        <span> I enjoy what I do. My skillset allows me to deliver high-quality solutions that 
                            meet the needs of clients and end-users alike. I stay up-to-date with the latest trends 
                            and technologies to ensure that my work remains innovative and effective.</span>
                    </section>
                </article>
                <div className='resume-link-wrap'>
                    <a href={Resume} className="resumeLink scale" download="Resume_SauravModi">
                        <span>Resume</span>
                        <div className='download-wrapper'>
                            <img src={arrow} alt="arrow logo"/>
                        </div>
                    </a>
                    <a onClick={manageQR} className="qr-wrapper">
                        <img id="qr-logo" src={QRlogo} alt="QR logo"/>
                    </a>
                </div>
                <div className='resume-qr'>
                            <img src={resumeqr} alt="Resume logo"/>
                </div>
            </div>
    </div>
    );
}

// export default About;