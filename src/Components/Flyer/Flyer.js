
import { Link } from 'react-router-dom';

import linkedin from '../../img/linkedinb.png';
import git from '../../img/gitb.png';
import insta from '../../img/instab.png';
import twitter from '../../img/twitterb.png';
import './Flyer.css';

function Flyer(){
    return(
        <div className="Flyer">
            <div className='flyer-wrapper'>
                <div className='link-flyer slide'>
                    <Link to="https://www.linkedin.com/in/sauravmodi03/" target="_blank"><img alt="Linked logo" src={linkedin}/></Link>
                    <Link to="https://github.com/sauravmodi03" target="_blank"><img alt="Git logo" src={git}/></Link>
                    <Link to="https://www.instagram.com/saurav.modi/" target="_blank"><img alt="Insta logo" src={insta}/></Link>
                    <Link to="https://twitter.com/sauravmodi03" target="_blank"><img alt="Twitter logo" src={twitter}/></Link>
                </div>
            </div>
        </div>
    );
}

export default Flyer;