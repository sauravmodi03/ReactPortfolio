
import { BrowserRouter, Link } from 'react-router-dom';

import React from 'react';

import linkedin from '../../img/in-d.png';
import git from '../../img/git-d.png';
import insta from '../../img/insta-d.png';
import twitter from '../../img/twit-d.png';

import linkedinL from '../../img/in-l.png';
import gitL from '../../img/git-l.png';
import instaL from '../../img/insta-l.png';
import twitterL from '../../img/twit-l.png';

import wheel from '../../img/wheel-d.png';
import wheelL from '../../img/wheel-l.png';

import './Flyer.scss';
import { useState } from 'react';

export default function Flyer(props){

    const[accordianFlag, setAccordianFlag] = useState(false);



    const toggleAccordian = () => {
        document.getElementById("flyer-links-wrap").classList.toggle("toggle-flyer");
        document.getElementById("acc-img").classList.toggle("acc-border-clip");
        document.getElementById('carret-logo').classList.toggle("rotate-carret");
        setAccordianFlag(!accordianFlag);
    }

        return(
            <BrowserRouter>
                <div id="Flyer" className="Flyer">
                    <div className='flyer-wrapper link-flyer slide'>
                        <div id="acc-img" >
                            <Link onClick={toggleAccordian}><img id="carret-logo" alt="Carret logo" src={props.darkTheme ? wheelL : wheel }></img></Link>
                        </div>
                        <nav id="flyer-links-wrap" className='flyer-links-wrap'>
                            <Link className='scale' to="https://www.linkedin.com/in/sauravmodi03/" target="_blank"><img alt="Linked logo" src={props.darkTheme ? linkedinL : linkedin}/></Link>
                            <Link className='scale' to="https://github.com/sauravmodi03" target="_blank"><img alt="Git logo" src={props.darkTheme ? gitL : git}/></Link>
                            <Link className='scale' to="https://www.instagram.com/saurav.modi/" target="_blank"><img alt="Insta logo" src={props.darkTheme ? instaL :insta}/></Link>
                            <Link className='scale' to="https://twitter.com/sauravmodi03" target="_blank"><img alt="Twitter logo" src={props.darkTheme ? twitterL : twitter}/></Link>
                        </nav>
                    </div>
                </div>
            </BrowserRouter>
        );
}