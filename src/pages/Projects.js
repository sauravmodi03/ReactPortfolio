import '../css/Education.scss';

function Project(){
    return(
        <div id="project" className="Project flex-top-padding">
            <div id="label">
                    <div className="wrapper">
                        <div data-inviewport="scale-in" id="S" className="letter">P</div>
                    </div>
                    <div className="wrapper">
                        <div data-inviewport="scale-in" id="K" className="letter">R</div>
                    </div>
                    <div className="wrapper">
                        <div data-inviewport="scale-in" id="I" className="letter">O</div>
                    </div>
                    <div className="wrapper">
                        <div data-inviewport="scale-in" id="L" className="letter">J</div>
                    </div>
                    <div className="wrapper">
                        <div data-inviewport="scale-in" id="L-s" className="letter">E</div>
                    </div>
                    <div className="wrapper">
                        <div data-inviewport="scale-in" id="S-s" className="letter">C</div>
                    </div>
                    <div className="wrapper">
                        <div data-inviewport="scale-in" id="S-s" className="letter">T</div>
                    </div>
                    <div className="wrapper">
                        <div data-inviewport="scale-in" id="S-s" className="letter">S</div>
                    </div>
                </div>
           <div className="timeline">
                <div className="container left">
                    <div className="content">
                        <h2>Jan 2023 - Present</h2>
                        <p>Gradutae Teaching Assistant</p>
                        <p>Company: Depaul University</p>
                        <p>Location: Chicago</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <h2>Jan 2020 - Dec 2021</h2>
                        <p>Software Developer / Onsite Coordinator</p>
                        <p>Company: Tata Consultancy Services</p>
                        <p>Location: Switzerland</p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                        <h2>Nov 2016 - Dec 2019</h2>
                        <p>Software Developer</p>
                        <p>Company: Tata Consultancy Services</p>
                        <p>Location: India</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;