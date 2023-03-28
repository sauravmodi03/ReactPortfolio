
import '../css/About.scss';
import React, {useEffect,  useRef } from 'react';
import coding from '../img/coding.png';


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
            <span className='about-info'>
                <article>
                    <p className='about-info-bg'>As a full stack developer, I have a deep understanding of multiple programming 
                        languages including HTML, CSS, JavaScript, and Java. Along with my proficiency in these languages, I am also 
                        experienced in utilizing popular frameworks like Angular, React, and Bootstrap to create robust and efficient 
                        solutions. My skillset allows me to deliver high-quality solutions that meet the needs of clients and end-users 
                        alike. I stay up-to-date with the latest trends and technologies to ensure that my work remains innovative 
                        and effective.</p>
                    <img src={coding} alt="Coding logo"></img>
                </article>
                <section className='about-info-bg'>
                    <p className=''>In addition to my technical skills, I also possess the following qualities:</p>
                    <p className=''>Attention to detail.</p>
                    <p className=''>Problem-solving skills.</p>
                    <p className=''>Collaboration.</p>
                    <p className=''>Continuous learning.</p>
                </section>
            </span>
    </div>
    );
}

// export default About;