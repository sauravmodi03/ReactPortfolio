import '../css/Work.scss';
import Label from './Label';

function Project(){
    return(
        <div id="work" className="Work flex-top-padding">
            <Label name="WORK"/>
            <div className="timeline">
                <div className="container left">
                    <div className="content shadow-left">
                        <h2>Jan 2023 - Present</h2>
                        <p>Gradutae Teaching Assistant</p>
                        <p>Company: Depaul University</p>
                        <p>Location: Chicago</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content shadow-right">
                        <h2>Jan 2020 - Dec 2021</h2>
                        <p>Software Developer / Onsite Coordinator</p>
                        <p>Company: Tata Consultancy Services</p>
                        <p>Location: Switzerland</p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content shadow-left">
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