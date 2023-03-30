import '../css/Skills.scss';
import Label from './Label';
import { useState, useEffect } from 'react';
import { getValue } from '@mui/system';

function Skills() {

    const[java, setJava] = useState(0);
    const[css, setCSS] = useState(0);
    const[html, setHTML] = useState(0);
    const[javascript, setJavaScript] = useState(0);

    useEffect(() => {
        var elem = document.querySelector(".java");
        elem.style.width = "90%";
        const timer = setInterval(()=>{
            java < 90 && setJava(java + 1);
            html < 80 && setHTML(html + 1);
            css < 70 && setCSS(css + 1);
            javascript < 60 && setJavaScript(javascript + 1);
        }, 2800/90);
        return () => clearInterval(timer);
    }, [java]);
   

    return (
        <div id="skills" className='Skills flex-top-padding'>
                <Label name="SKILLS"/>
                <div className='education-container'>
                    <h1>Education</h1>
                    <div className='ed-wrapper'>
                        <h2>Date</h2>
                        <div className='ed-info'>
                            information
                        </div>
                    </div>
                </div>
                <div className='skills-container'>
                    <div className='skills-wrapper'>
                        <span className="skill skill-name">JAVA</span>
                        <div className='bar-wrapper'><div className='bar java'>{java}%</div></div>
                    </div>
                    <div className='skills-wrapper'>
                        <span className="skill skill-name">HTML</span>
                        <div className='bar-wrapper'><div className='bar html'>{html}%</div></div>
                    </div>
                    <div className='skills-wrapper'>
                        <span className="skill skill-name">CSS</span>
                        <div className='bar-wrapper'><div className='bar css'>{css}%</div></div>
                    </div>
                    <div className='skills-wrapper'>
                        <span className="skill skill-name">JavaScript</span>
                        <div className='bar-wrapper'><div className='bar javascript'>{javascript}%</div></div>
                    </div>
                </div>
        </div>
    );
}

export default Skills;