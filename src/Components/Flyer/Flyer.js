
import { Link } from 'react-router-dom';

import linkedin from '../../img/linkedinb.png';
import git from '../../img/gitb.png';
import insta from '../../img/instab.png';
import twitter from '../../img/twitterb.png';
import carret from '../../img/carret.avif';
import './Flyer.css';

const toggleAccordian = () => {
    console.log("hey");
    var element = document.getElementById("flyer-wrap-in");
    if(element.style.width === "" || element.style.width === "2em"){
        element.style.width="12em";
        // element.classList.add("flyer-acordian");
        document.getElementById('carret-logo').style.transform = 'rotate(90deg)';
    } else{
        element.style.width="2em";
        // element.classList.remove("flyer-acordian");
        document.getElementById('carret-logo').style.transform = 'rotate(0deg)';
    }
}

function Flyer(){
    return(
        <div className="Flyer">
            <div className='flyer-wrapper'>
                <div id="flyer-wrap-in" className='link-flyer slide'>
                    <Link id="accordian" onClick={toggleAccordian} ><img id="carret-logo" alt="Carret logo" src={carret}></img></Link>
                    <Link className='scale' to="https://www.linkedin.com/in/sauravmodi03/" target="_blank"><img alt="Linked logo" src={linkedin}/></Link>
                    <Link className='scale' to="https://github.com/sauravmodi03" target="_blank"><img alt="Git logo" src={git}/></Link>
                    <Link className='scale' to="https://www.instagram.com/saurav.modi/" target="_blank"><img alt="Insta logo" src={insta}/></Link>
                    <Link className='scale' to="https://twitter.com/sauravmodi03" target="_blank"><img alt="Twitter logo" src={twitter}/></Link>
                </div>
            </div>
        </div>
    );
}

export default Flyer;