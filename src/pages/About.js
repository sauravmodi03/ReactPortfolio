
import '../css/About.scss';
import React from 'react';
import about from '../img/self.png';
import arrow from '../img/arrow-white.png';
import resumeqr from '../img/ResumeQR.png';
import QRlogo from '../img/QR-black.png';
import Resume from '../data/Resume.pdf';
import Label from './Label';

export default function About() {

    const innerHeight = document.documentElement.clientHeight;

    const getY = (element) => {
        return element.getBoundingClientRect().y;
    }

    const getHeight = (element) => {
        return element.getBoundingClientRect().height
    }

    document.addEventListener('scroll',function(){
        var infoList = document.querySelectorAll(".ab-animation");
        var pic = document.querySelector(".about-pic");

        if(innerHeight > getY(pic) + getHeight(pic) * 2/3){
            pic.style.animation = "slideInLeft-aboutpic 1.5s forwards";
        }

        for (let i = 0; i < infoList.length; i++) {
            if(innerHeight > getY(infoList[i]) + getHeight(infoList[i])/4){
                infoList[i].style.animation = "slideInLeft-aboutinfo 1.5s forwards";
            }
        }

        // var resumeLink = document.querySelector(".resumeLink");
        // var qrLink = document.querySelector(".qr-wrapper");
        // const resumeLinkY = resumeLink.getBoundingClientRect().y;
        // const resumeHeight = resumeLink.getBoundingClientRect().height;
        // if(innerHeight > resumeLinkY + resumeHeight * 2/3){
        //     resumeLink.style.animation = "resumeSlideInBottom 1.5s forwards";
        //     qrLink.style.animation = "resumeSlideInBottom 1.5s forwards";
        // }

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
                            <span className='about-l1 ab-animation'>
                                Hi, I'm Saurav
                            </span>
                            <span className='about-l1 ab-animation'>
                                Full Stack Developer!
                            </span>
                            <span className='about-l3 ab-animation'>
                                Chicago, USA
                            </span>
                        </section>
                        <span className='about-pic'>
                            <img src={about} alt="About logo"></img>
                        </span>
                        <section className='about-info-main'>
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
                        <div onClick={manageQR} className="qr-wrapper">
                            <img id="qr-logo" src={QRlogo} alt="QR logo"/>
                        </div>
                    </div>
                    <div className='resume-qr'>
                        <img src={resumeqr} alt="Resume logo"/>
                    </div>
                </div>
        </div>
    );
}

// export default About;