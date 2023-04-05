import '../css/Skills.scss';
import Label from './Label';
import { useState, useEffect } from 'react';

function Skills() {

    const[java, setJava] = useState(0);
    const[css, setCSS] = useState(0);
    const[html, setHTML] = useState(0);
    const[javascript, setJavaScript] = useState(0);
    const[react, setReact] = useState(0);
    const[angular, setAngular] = useState(0);
    const[python, setPython] = useState(0);

    useEffect(() => {
        var elem = document.querySelector(".java");
        elem.style.width = "90%";
        const timer = setInterval(()=>{
            java < 90 && setJava(java + 1);
            html < 80 && setHTML(html + 1);
            css < 70 && setCSS(css + 1);
            javascript < 60 && setJavaScript(javascript + 1);
            react < 50 && setReact(react + 1);
            angular < 50 && setAngular(angular + 1);
            python < 50 && setPython(python + 1);
        }, 2800/90);
        return () => clearInterval(timer);
    }, [java, html, css, javascript, react, angular, python]);

    const getY = (element) => {
        return element.getBoundingClientRect().y;
    }

    const getHeight = (element) => {
        return element.getBoundingClientRect().height
    }

    const innerHeight = document.documentElement.clientHeight;

    document.addEventListener('scroll',function(){
        const leftList = document.querySelectorAll(".skill-slidein-left-animation");
        const rightList = document.querySelectorAll(".skill-slidein-right-animation");

        for (let i = 0; i < leftList.length; i++) {
            if(innerHeight > getY(leftList[i]) + getHeight(leftList[i])/4){
                leftList[i].style.animation = "skill-slideInLeft 1.5s forwards";
            }
        }

        for (let i = 0; i < rightList.length; i++) {
            if(innerHeight > getY(rightList[i]) + getHeight(rightList[i])/4){
                rightList[i].style.animation = "skill-slideInRight 1.5s forwards";
            }
        }
    });
    

    return (
        <div id="skills" className='Skills flex-top-padding'>
                <Label name="SKILLS"/>
                <div className='skills-container'>
                    <div className='skills-wrapper skill-slidein-left-animation'>
                        <span className="skill skill-name">JAVA</span>
                        <div className='bar-wrapper'><div className='bar java'>{java}%</div></div>
                    </div>
                    <div className='skills-wrapper skill-slidein-right-animation'>
                        <span className="skill skill-name">HTML</span>
                        <div className='bar-wrapper'><div className='bar html'>{html}%</div></div>
                    </div>
                    <div className='skills-wrapper skill-slidein-left-animation'>
                        <span className="skill skill-name">CSS</span>
                        <div className='bar-wrapper'><div className='bar css'>{css}%</div></div>
                    </div>
                    <div className='skills-wrapper skill-slidein-right-animation'>
                        <span className="skill skill-name">JavaScript</span>
                        <div className='bar-wrapper'><div className='bar javascript'>{javascript}%</div></div>
                    </div>
                    <div className='skills-wrapper skill-slidein-left-animation'>
                        <span className="skill skill-name">React</span>
                        <div className='bar-wrapper'><div className='bar javascript'>{react}%</div></div>
                    </div>
                    <div className='skills-wrapper skill-slidein-right-animation'>
                        <span className="skill skill-name">Angular</span>
                        <div className='bar-wrapper'><div className='bar javascript'>{angular}%</div></div>
                    </div>
                    <div className='skills-wrapper skill-slidein-left-animation'>
                        <span className="skill skill-name">Python</span>
                        <div className='bar-wrapper'><div className='bar javascript'>{python}%</div></div>
                    </div>
                    <div className='skills-wrapper skill-slidein-right-animation'>
                        <span className="skill skill-name">Python</span>
                        <div className='bar-wrapper'><div className='bar javascript'>{python}%</div></div>
                    </div>
                </div>
        </div>
    );
}

export default Skills;