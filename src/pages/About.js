
import '../css/About.scss';
import React, {useEffect,  useRef } from 'react';
import about from '../img/about.png';
import arrow from '../img/arrow-white.png';
import download from '../img/download-white.png';
import {Link}  from "react-router-dom";
import Resume from '../data/Resume.pdf';

export default function About() {

    const ref = useRef(null);

    //const inViewport = aboutSection(ref, '0px');

    useEffect(() => {
        const element = ref.current;
        console.log(element);
         // Trigger as soon as the element becomes visible
        //const inViewport = useIntersection(ref, '-200px'); // Trigger if 200px is visible from the element
        const handleScroll = () => {
       // const inViewport = handleScrollBody(ref);
        // if(inViewport){
        //   console.log("About Visible");
        // }
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    // if(inViewport){
    //     console.log("About Visible");
    // }


    return (
    <div id="about" className='About flex-top-padding'>
            <div id="label">
                <div className="wrapper">
                    <div data-inviewport="scale-in" id="A" className="letter">A</div>
                </div>
                <div className="wrapper">
                    <div data-inviewport="scale-in" id="B" className="letter">B</div>
                </div>
                <div className="wrapper">
                    <div data-inviewport="scale-in" id="O" className="letter">O</div>
                </div>
                <div className="wrapper">
                    <div data-inviewport="scale-in" id="U" className="letter">U</div>
                </div>
                <div className="wrapper">
                    <div data-inviewport="scale-in" id="T" className="letter">T</div>
                </div>
            </div>
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