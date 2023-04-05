import '../css/Skills.scss';
import Label from './Label';
import { useState, useEffect } from 'react';

function Skills() {

    const[java, setJava] = useState(90);
    const[css, setCSS] = useState(80);
    const[html, setHTML] = useState(80);
    const[javascript, setJavaScript] = useState(70);
    const[react, setReact] = useState(50);
    const[angular, setAngular] = useState(50);
    const[python, setPython] = useState(50);
    const[spring, setSpring] = useState(70);

    const skillMap = new Map();
    skillMap.set('JAVA', '90%');
    skillMap.set('HTML', '80%');
    skillMap.set('CSS', '80%');
    skillMap.set('JavaScript', '70%');
    skillMap.set('Python', '50%');
    skillMap.set('React', '40%');
    skillMap.set('Angular', '50%');
    skillMap.set('Spring', '70%');

    // useEffect(() => {
    //     var elem = document.querySelector(".java");
    //     elem.style.width = "90%";
    //     const timer = setInterval(()=>{
    //         java < 90 && setJava(java + 1);
    //         html < 80 && setHTML(html + 1);
    //         css < 70 && setCSS(css + 1);
    //         javascript < 60 && setJavaScript(javascript + 1);
    //         react < 50 && setReact(react + 1);
    //         angular < 50 && setAngular(angular + 1);
    //         python < 50 && setPython(python + 1);
    //         spring < 80 && setSpring(spring + 1);
    //     }, 2800/90);
    //     return () => clearInterval(timer);
    // }, [java, html, css, javascript, react, angular, python, spring]);

    const getY = (element) => {
        return element.getBoundingClientRect().y;
    }

    const getHeight = (element) => {
        return element.getBoundingClientRect().height
    }

    const innerHeight = document.documentElement.clientHeight;

    document.addEventListener('scroll',function(){
        console.log("Skills");
        const leftList = document.querySelectorAll(".skill-slidein-left-animation");
        const rightList = document.querySelectorAll(".skill-slidein-right-animation");

        for (let i = 0; i < leftList.length; i++) {
            if(innerHeight > getY(leftList[i]) + getHeight(leftList[i])/4){
                leftList[i].style.animation = "skill-slideInLeft 1.5s forwards";
                leftList[i].children[1].children[0].style.width = skillMap.get(leftList[i].children[0].innerText);
            }
        }

        for (let i = 0; i < rightList.length; i++) {
            if(innerHeight > getY(rightList[i]) + getHeight(rightList[i])/4){
                rightList[i].style.animation = "skill-slideInRight 1.5s forwards";
                rightList[i].children[1].children[0].style.width = skillMap.get(rightList[i].children[0].innerText);
            }
        }
    });
    

    return (
        <div id="skills" className='Skills flex-top-padding'>
                <Label name="SKILLS"/>
                <div className='skills-container'>
                    <div className='skills-wrapper skill-slidein-left-animation'>
                        <span className="skill skill-name">JAVA</span>
                        <div className='bar-wrapper'><div className='bar java'>{skillMap.get('JAVA')}</div></div>
                    </div>
                    <div className='skills-wrapper skill-slidein-right-animation'>
                        <span className="skill skill-name">HTML</span>
                        <div className='bar-wrapper'><div className='bar html'>{skillMap.get('HTML')}</div></div>
                    </div>
                    <div className='skills-wrapper skill-slidein-left-animation'>
                        <span className="skill skill-name">CSS</span>
                        <div className='bar-wrapper'><div className='bar css'>{skillMap.get('CSS')}</div></div>
                    </div>
                    <div className='skills-wrapper skill-slidein-right-animation'>
                        <span className="skill skill-name">JavaScript</span>
                        <div className='bar-wrapper'><div className='bar javascript'>{skillMap.get('JavaScript')}</div></div>
                    </div>
                    <div className='skills-wrapper skill-slidein-left-animation'>
                        <span className="skill skill-name">Python</span>
                        <div className='bar-wrapper'><div className='bar javascript'>{skillMap.get('Python')}</div></div>
                    </div>
                    <div className='skills-wrapper skill-slidein-right-animation'>
                        <span className="skill skill-name">React</span>
                        <div className='bar-wrapper'><div className='bar javascript'>{skillMap.get('React')}</div></div>
                    </div>
                    <div className='skills-wrapper skill-slidein-left-animation'>
                        <span className="skill skill-name">Angular</span>
                        <div className='bar-wrapper'><div className='bar javascript'>{skillMap.get('Angular')}</div></div>
                    </div>
                    <div className='skills-wrapper skill-slidein-right-animation'>
                        <span className="skill skill-name">Spring</span>
                        <div className='bar-wrapper'><div className='bar javascript'>{skillMap.get('Spring')}</div></div>
                    </div>
                </div>
        </div>
    );
}

export default Skills;