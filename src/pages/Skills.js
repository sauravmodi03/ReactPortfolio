import '../css/Skills.scss';
import Label from './Label';

function Skills() {
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
                        <span className=" skill skill-name">JAVA</span>
                        <div className='bar-wrapper'><div className='bar java'>20%</div></div>
                    </div>
                    <div className='skills-wrapper'>
                        <span className=" skill skill-name">HTML</span>
                        <div className='bar-wrapper'><div className='bar html'>20%</div></div>
                    </div>
                    <div className='skills-wrapper'>
                        <span className=" skill skill-name">CSS</span>
                        <div className='bar-wrapper'><div className='bar css'>20%</div></div>
                    </div>
                    <div className='skills-wrapper'>
                        <span className="skill skill-name">JavaScript</span>
                        <div className='bar-wrapper'><div className='bar javascript'>20%</div></div>
                    </div>
                </div>
        </div>
    );
}

export default Skills;