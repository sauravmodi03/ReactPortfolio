import '../css/Skills.scss';

function Skills() {
    return (
        <div id="skills" className='Skills flex-top-padding'>
                <div id="label">
                    <div className="wrapper">
                        <div data-inviewport="scale-in" id="S" className="letter">S</div>
                    </div>
                    <div className="wrapper">
                        <div data-inviewport="scale-in" id="K" className="letter">K</div>
                    </div>
                    <div className="wrapper">
                        <div data-inviewport="scale-in" id="I" className="letter">I</div>
                    </div>
                    <div className="wrapper">
                        <div data-inviewport="scale-in" id="L" className="letter">L</div>
                    </div>
                    <div className="wrapper">
                        <div data-inviewport="scale-in" id="L-s" className="letter">L</div>
                    </div>
                    <div className="wrapper">
                        <div data-inviewport="scale-in" id="S-s" className="letter">S</div>
                    </div>
                </div>
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