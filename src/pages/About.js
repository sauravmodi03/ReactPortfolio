
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
        var infoList = document.querySelectorAll(".slideInLeft");
        var pic = document.querySelector(".slideInRight");
        var label = document.querySelector(".about-label");
        var slideTopList = document.querySelectorAll(".slideInTop");

        if(innerHeight > getY(pic) + getHeight(pic) * 2/3){
            pic.style.animation = "slide-X 1s forwards";
        }

        if(innerHeight > getY(label) + getHeight(label) * 2/3){
            label.style.animation = "labelSlideInTop 1.5s forwards";
        }

        for (let i = 0; i < infoList.length; i++) {
            if(innerHeight > getY(infoList[i]) + getHeight(infoList[i])/4){
                infoList[i].style.animation = "slide-X 1.5s forwards";
            }
        }

        for (let i = 0; i < slideTopList.length; i++) {
            if(innerHeight > getY(slideTopList[i]) + getHeight(slideTopList[i])/4){
                slideTopList[i].style.animation = "slide-Y 1.5s forwards";
            }
        }

    });

    return (
        <div id="about" className='About flex-top-padding'>
                <div className='about-label heading-text'><h2>About Me</h2></div>
                <div className='about-info-wrapper -drop-shadow'>
                    <article className='slideInTop'>
                        <section className='about-info'>
                            <div>
                                <p className='about-l3 slideInLeft'>
                                    Hello, my name is
                                </p>
                                <p className='about-l1 slideInLeft'>
                                    Saurav Modi.
                                </p>
                                <p className='about-l1 slideInLeft'>
                                    I'm a Full Stack Developer.
                                </p>
                                <p className='about-l3 slideInLeft -bold'>
                                    5+ Yrs of Exp | Chicago, USA
                                </p>
                            </div>
                            <div className='about-info-main'>
                                <p className='slideInLeft'> I enjoy what I do. My skillset allows me to deliver high-quality solutions that 
                                    meet the needs of clients and end-users alike. I stay up-to-date with the latest trends 
                                    and technologies to ensure that my work remains innovative and effective.</p>
                                <p className='slideInLeft'> Languages I speak: Java, HTML, CSS, JavaScript, Python</p>
                                <p className='slideInLeft'> Framework knowledge: Spring, React, Angular, Bootstrap, JDBC, JPA, Hibernate, Gradle, Maven</p>
                                <p className='slideInLeft'> Tools experience: Intellij, Eclipse, Pycharm, VSCode, GiBash</p>
                            </div>
                        </section>
                        <section>
                            <picture className='about-pic slideInRight'>
                                <img src={about} alt="About logo"></img>
                            </picture>
                            <p className='about-l3 -bold slideInTop'>
                                5+ Yrs | Chicago, USA
                            </p>
                        </section>
                        
                    </article>
                </div>
        </div>
    );
}

// export default About;