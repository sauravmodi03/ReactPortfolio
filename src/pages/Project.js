
import {getY, getHeight} from './Utility.js';
import '../css/Project.scss';
import clientPortal from '../img/insurance.png';
import { useEffect } from 'react';

import arrow from '../img/arrow-up-d.png';
import arrowL from '../img/arrow-up-l.png';

export function Project(props) {

    const innerHeight = document.documentElement.clientHeight;

    document.addEventListener('scroll',function(){
        var label = document.querySelector(".project-label");

        if(innerHeight > getY(label) + getHeight(label) * 2/3){
            label.style.animation = "labelSlideInTop 1.5s forwards";
        } 
    });

    useEffect(()=> {
        const element = document.querySelector(".project-wrapper");
        element.addEventListener("focus",function(){
            console.log("Focus");
            document.querySelector(".project-info").classList.add("expand-info");
            document.querySelector(".info-arrow").classList.add("rotate-arrow");
        });

        element.addEventListener("blur",function(){
            console.log("Blur");
            document.querySelector(".project-info").classList.remove("expand-info");
            document.querySelector(".info-arrow").classList.remove("rotate-arrow");
        });
    });

    const handleInfo = () => {
        const element = document.querySelector(".project-info");
        element.classList.toggle("expand-info");
    };

    return (
        <div id="project" className='Project flex-top-padding'>
            <div className='project-label heading-text'><h2>Projects</h2></div>
            <div className='project-container'>
                <section className='project-wrapper' tabIndex="1">
                    <div className='project-info'>
                        <h4>Client Portal Application</h4>
                        <h5>A web application for end user to generate quotation for different insurance provided by the client.</h5>
                        <p>Developed and supported applications using Java, JavaScript, HTML, CSS, RESTful API, and Spring framework working alongside a cross-functional team.</p>
                        <p>Written comprehensive JUnit test cases for conducting rigorous integration testing to ensure the bug-free performance of the 
                            applications with 100% test coverage.</p>
                    </div>
                    <picture className='project-picture' >
                        <img src={clientPortal}  alt="Client Portal"/>
                        <picture className='info-arrow'><img src={props.darkTheme ? arrowL : arrow} alt="Arrow"/></picture>
                    </picture>
                </section>
            </div>
        </div>
    );
}