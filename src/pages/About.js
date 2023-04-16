
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
                            <div className='about-info-main'>
                                <p className='slideInLeft'>As a dedicated Software Developer, I have gained valuable experience and skills since I began 
                                my career in 2016, following the completion of my undergraduate degree. I have had the privilege 
                                of working with Tata Consultancy Services from 2016 to 2022, where I have consistently delivered high-quality solutions that effectively meet 
                                the needs of clients and end-users alike.</p>
                                <p className='slideInLeft'> My skillset is constantly evolving, and I make sure to stay up-to-date with the latest trends and 
                                technologies to ensure that my work is innovative and effective. I believe in a collaborative approach to problem-solving and enjoy 
                                working with my colleagues to find creative solutions to complex challenges.</p>
                                <p className='slideInLeft'>When I'm not working, I enjoy playing video games and cooking. These hobbies not only provide a welcome 
                                break from work but also help me to stay sharp and focused when I'm on the job. I'm excited to continue learning and growing in my 
                                career as a Software Developer and to make meaningful contributions to the industry.</p>
                                <p className='slideInLeft'> Languages I speak: Java, HTML, CSS, JavaScript, Python</p>
                                <p className='slideInLeft'> Framework knowledge: Spring, React, Angular, Bootstrap, JDBC, JPA, Hibernate</p>
                                <p className='slideInLeft'> Build Tool: Maven, Gradle</p>
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