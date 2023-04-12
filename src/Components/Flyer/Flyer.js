
import { BrowserRouter, Link } from 'react-router-dom';

import React from 'react';

import linkedin from '../../img/in-d.png';
import git from '../../img/git-d.png';
import insta from '../../img/insta-d.png';
import twitter from '../../img/twit-d.png';
import gearw from '../../img/gear-white.png';
import './Flyer.scss';

class Flyer extends React.Component{

    constructor(props){
        super(props);
        this.state = {accordianFlag : false};
        this.toggleAccordian = this.toggleAccordian.bind(this);
    }

    toggleAccordian () {
        console.log("flyer" + this.state.accordianFlag);
        document.getElementById("flyer-links-wrap").classList.toggle("toggle-flyer");
        document.getElementById("acc-img").classList.toggle("acc-border-clip");
        document.getElementById('carret-logo').classList.toggle("rotate-carret");
        this.setState({accordianFlag : !this.state.accordianFlag});
    }

    render(){
        return(
            <BrowserRouter>
                <div id="Flyer" className="Flyer">
                    <div className='flyer-wrapper link-flyer slide'>
                        <div id="acc-img" >
                            <Link onClick={this.toggleAccordian}><img id="carret-logo" alt="Carret logo" src={gearw}></img></Link>
                        </div>
                        <nav id="flyer-links-wrap" className='flyer-links-wrap'>
                            <Link className='scale' to="https://www.linkedin.com/in/sauravmodi03/" target="_blank"><img alt="Linked logo" src={linkedin}/></Link>
                            <Link className='scale' to="https://github.com/sauravmodi03" target="_blank"><img alt="Git logo" src={git}/></Link>
                            <Link className='scale' to="https://www.instagram.com/saurav.modi/" target="_blank"><img alt="Insta logo" src={insta}/></Link>
                            <Link className='scale' to="https://twitter.com/sauravmodi03" target="_blank"><img alt="Twitter logo" src={twitter}/></Link>
                        </nav>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Flyer;