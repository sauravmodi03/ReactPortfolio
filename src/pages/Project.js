
import {getY, getHeight} from './Utility.js';
import '../css/Project.scss';
import clientPortal from '../img/insurance.png';
import agentPortal from '../img/agentportal.png';
import { useEffect } from 'react';

import arrow from '../img/arrow-up-d.png';
import arrowL from '../img/arrow-up-l.png';

export function Project(props) {

    const innerHeight = document.documentElement.clientHeight;

    document.addEventListener('scroll',function(){
        var label = document.querySelector(".project-label");
        var listProjects = document.querySelectorAll(".slideInTop");

        if(innerHeight > getY(label) + getHeight(label) * 2/3){
            label.style.animation = "labelSlideInTop 1.5s forwards";
        }

        for (let i = 0; i < listProjects.length; i++) {
            if(innerHeight > getY(listProjects[i]) + getHeight(listProjects[i])/4){
                listProjects[i].style.animation = "slide-Y 1.5s forwards";
            }
        }
    });

    const handleInfo = () => {
        const element = document.querySelector(".project-info");
        element.classList.toggle("expand-info");
    };

    return (
        <div id="project" className='Project flex-top-padding'>
            <div className='project-label heading-text'><h2>Projects</h2></div>
            <div className='project-container'>
                <section className='project-wrapper slideInTop' tabIndex="1">
                    <div className='project-info'>
                        <h4>Web Application</h4>
                        <h5>A web application for end user to generate quotation for different insurance provided by the client.</h5>
                        <p>Developed and supported applications using Java, JavaScript, HTML, CSS, RESTful API, and Spring framework working alongside a cross-functional team.</p>
                        <p>Implemented and integrated language translation feature, leveraging the powerful AngularJS framework and JSON data format. Allowing end user to
                            change the website language.
                        </p>
                    </div>
                    <picture className='project-picture' >
                        <img src={clientPortal}  alt="Client Portal"/>
                        <picture className='info-arrow'><img className="info-arrow-img" src={props.darkTheme ? arrowL : arrow} alt="Arrow"/></picture>
                    </picture>
                </section>
                <section className='project-wrapper even-p-wrapper slideInTop' tabIndex="1">
                    <div className='project-info'>
                        <h4>Web Application</h4>
                        <h5>A web application for Client agent's on intranet to generate offers and contract for end users.</h5>
                        <p>Refine and develop intricate business logic using Java and SQL in accordance with client specifications.</p>
                        <p>Mitigated critical production incidents, minimized impact by 40%, through root cause analysis, proposing necessary Java/SQL/Data modifications..</p>
                    </div>
                    <picture className='project-picture' >
                        <img src={agentPortal}  alt="Client Portal"/>
                        <picture className='info-arrow' ><img className="info-arrow-img" src={props.darkTheme ? arrowL : arrow} alt="Arrow"/></picture>
                    </picture>
                </section>
            </div>
        </div>
    );
}