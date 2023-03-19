
import { Link } from 'react-router-dom';
import React from 'react';

import linkedin from '../../img/linkedinb.png';
import git from '../../img/gitb.png';
import insta from '../../img/instab.png';
import twitter from '../../img/twitterb.png';
import carret from '../../img/carret.avif';
import './Flyer.css';

class Flyer extends React.Component{

    constructor(props){
        super(props);
        this.state = {accordianFlag : false};
        this.toggleAccordian = this.toggleAccordian.bind(this);
    }

    toggleAccordian () {
        console.log("flyer" + this.state.accordianFlag);
        document.getElementById("flyer-links-wrap").classList.toggle("expand-flyer");
        document.getElementById("acc-img").classList.toggle("acc-border-clip");
        document.getElementById('carret-logo').classList.toggle("rotate-carret");
        // if(!this.state.accordianFlag){
        //     document.getElementById('carret-logo').style.transform = "rotate(90deg)";
        // } else{
        //     document.getElementById('carret-logo').style.transform = "rotate(0deg)";
        // }
        this.setState({accordianFlag : !this.state.accordianFlag});
    }

    render(){
        return(
            <div id="Flyer" className="Flyer">
                <div className='flyer-wrapper link-flyer slide'>
                    <div id="acc-img" >
                        <Link onClick={this.toggleAccordian}><img id="carret-logo" alt="Carret logo" src={carret}></img></Link>
                    </div>
                    <div id="flyer-links-wrap">
                        <Link className='scale' to="https://www.linkedin.com/in/sauravmodi03/" target="_blank"><img alt="Linked logo" src={linkedin}/></Link>
                        <Link className='scale' to="https://github.com/sauravmodi03" target="_blank"><img alt="Git logo" src={git}/></Link>
                        <Link className='scale' to="https://www.instagram.com/saurav.modi/" target="_blank"><img alt="Insta logo" src={insta}/></Link>
                        <Link className='scale' to="https://twitter.com/sauravmodi03" target="_blank"><img alt="Twitter logo" src={twitter}/></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Flyer;