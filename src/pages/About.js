
import '../css/About.scss';
import React from 'react';
import about from '../img/self-orig.jpg';
import {getY, getHeight} from './Utility.js';

export default function About() {

    const innerHeight = document.documentElement.clientHeight;

    // const getY = (element) => {
    //     return element.getBoundingClientRect().y;
    // }

    // const getHeight = (element) => {
    //     return element.getBoundingClientRect().height
    // }

    document.addEventListener('scroll',function(){
        var infoList = document.querySelectorAll(".ab-animation");
        var pic = document.querySelector(".about-pic");
        var label = document.querySelector(".about-label");

        if(innerHeight > getY(pic) + getHeight(pic) * 2/3){
            pic.style.animation = "slideInLeft-aboutpic 1.5s forwards";
        }

        for (let i = 0; i < infoList.length; i++) {
            if(innerHeight > getY(infoList[i]) + getHeight(infoList[i])/4){
                infoList[i].style.animation = "slideInLeft-aboutinfo 1.5s forwards";
            }
        }

        if(innerHeight > getY(label) + getHeight(label) * 2/3){
            label.style.animation = "labelSlideInTop 1.5s forwards";
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
                <div className='about-label heading-text'><h2>About Me</h2></div>
                <div className='about-info-wrapper -drop-shadow'>
                    <article>
                        <section className='about-info'>
                            <span className='about-l1 ab-animation'>
                                Hi, I'm Saurav
                            </span>
                            <span className='about-l1 ab-animation'>
                                Full Stack Developer!
                            </span>
                            <span className='about-l3 ab-animation'>
                                5+ Yrs | Chicago, USA
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
                        </section>
                        <picture className='about-pic'>
                            <img src={about} alt="About logo"></img>
                        </picture>
                    </article>
                </div>
        </div>
    );
}

// export default About;