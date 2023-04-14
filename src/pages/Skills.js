import '../css/Skills.scss';
import {getY, getHeight} from './Utility.js';

function Skills() {

    const skillMap = new Map();
    skillMap.set('JAVA', '90%');
    skillMap.set('HTML', '80%');
    skillMap.set('CSS', '80%');
    skillMap.set('JavaScript', '70%');
    skillMap.set('Python', '50%');
    skillMap.set('React', '40%');
    skillMap.set('Angular', '50%');
    skillMap.set('Spring', '70%');

    const innerHeight = document.documentElement.clientHeight;

    document.addEventListener('scroll',function(){
        const leftList = document.querySelectorAll(".skill-slidein-left-animation");
        const rightList = document.querySelectorAll(".skill-slidein-right-animation");
        const label = document.querySelector(".skills-label");

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

        if(innerHeight > getY(label) + getHeight(label) * 2/3){
            label.style.animation = "labelSlideInTop 1.5s forwards";
        }
    });
    

    return (
        <div id="skills" className='Skills flex-top-padding'>
                <div className='skills-label heading-text'><h2>Skills</h2></div>
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