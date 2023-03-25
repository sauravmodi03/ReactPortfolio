
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
    <div id="about" className='About'>
        <section>
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
                    <p className='about-info-bg'>As a full stack developer, I possess a comprehensive understanding of programming languages like HTML, CSS, JavaScript, 
                        and Java. Additionally, I am proficient in using popular frameworks such as Angular, React, and Bootstrap to deliver effective solutions.</p>
                    <img src={coding} alt="Coding logo"></img>
                </article>
                <p className='about-info-bg'>In addition to my technical skills, I also possess the following qualities:</p>
                <p className='about-info-bg'>Attention to detail.</p>
                <p className='about-info-bg'>Problem-solving skills.</p>
                <p className='about-info-bg'>Collaboration.</p>
                <p className='about-info-bg'>Continuous learning.</p>
            </span>
         </section>
    </div>
    );
}

// export default About;