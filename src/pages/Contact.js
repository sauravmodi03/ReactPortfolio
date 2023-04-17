
import React from 'react';
import '../css/Contact.scss';

import phoneblack from '../img/call-d.png';
import markerblack from '../img/marker-d.png';
import mailblack from '../img/mail-d.png';
import www from '../img/www-d.png';

import phoneblackL from '../img/call-l.png';
import markerblackL from '../img/marker-l.png';
import mailblackL from '../img/mail-l.png';
import wwwL from '../img/www-l.png';


import emailjs from '@emailjs/browser';
import {getY, getHeight} from './Utility.js';

class Contact extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            fname : "",
            lname : "",
            subject:"",
            email: "",
            message: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.form = React.createRef();
    };

    componentDidMount(){
        const innerHeight = document.documentElement.clientHeight;

        document.addEventListener('scroll',function(){
            const wrapper = document.querySelector(".contact-wrapper");
            const form = document.querySelector(".contact-form");
            
            const label = document.querySelector(".contact-label");
            const listElements = document.querySelectorAll(".slide-right"); 
            
            const wrapperY = wrapper.getBoundingClientRect().y;
            const elementHeight = wrapper.getBoundingClientRect().height;

            if(innerHeight > wrapperY + elementHeight/4){
                wrapper.style.animation = "contact-fadeIn 1s forwards";
                form.style.animation = "form-slideInTop 1s forwards 1s";
                //info.style.animation = "infoWrapper-slideInRight 1s forwards 1s";
            }

            if(innerHeight > getY(label) + getHeight(label) * 2/3){
                label.style.animation = "labelSlideInTop 1s forwards";
            }

            for (let i = 0; i < listElements.length; i++) {
                if(innerHeight > getY(listElements[i]) + getHeight(listElements[i])/4){
                    listElements[i].style.animation = "slideInRight 1s forwards 1s";
                }
            }
        });
    }

    handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    sendEmail = (e) => {
        e.preventDefault();
        console.log("contact form");
        document.getElementById("email-confirm").classList.toggle("show-confirm");
        emailjs.sendForm('service_5c7wcd9', 'template_egunr9p', this.form.current, 'ihO1q38-DIyH5MRpz')
          .then((result) => {
              document.getElementById("email-confirm").classList.add("show-confirm");
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        this.resetForm();
      };

      resetForm = () => {
        this.setState({
            fname : "",
            lname : "",
            subject:"",
            email: "",
            message: ""
        });
      }

      resetAnimation = () => {
        document.getElementById("email-confirm").classList.toggle("show-confirm");
      }

    render (){
        return(
                <div id="contact" className='Contact flex-top-padding'>
                    <div id="email-confirm" onAnimationEnd={this.resetAnimation} className='email-confirmation'>
                        <span>Message sent successfully !</span>
                    </div>
                    <div className='contact-label heading-text'><h2>Contact</h2></div>
                    <div className='contact-wrapper'>
                        <form ref={this.form} className="contact-form" onSubmit={this.sendEmail}>
                            <label className='inputs'>Get in touch?</label>
                            <input type="text" name="fname" required placeholder="First Name" value={this.state.fname} onChange={this.handleChange} />
                            <input className='inputs' type="text" name="lname" required placeholder="Last Name" value={this.state.lname} onChange={this.handleChange} />
                            <input className='inputs' type="text" name="subject" required placeholder="Subject" value={this.state.subject} onChange={this.handleChange} />
                            <input className='inputs' type="email" name='email' placeholder="Email" required value={this.state.email} onChange={this.handleChange} />
                            <textarea className='inputs' name='message' value={this.state.message} onChange={this.handleChange} />
                            <input type="submit" value="Send" />
                        </form>
                        <div className="contact-info-wrapper">
                            <label className='slide-right'>Contact information.</label>
                            <article className='info-article'>
                                <div className="contact-info slide-right">
                                    <div><img src={this.props.darkTheme ? markerblackL : markerblack} alt=''/></div>
                                    <div className='info-val'>400 E 33RD ST, Chicago, Illinoi - 60616, USA</div>
                                </div>
                                <div className="contact-info slide-right">
                                    <div><img src={this.props.darkTheme ? mailblackL :  mailblack} alt=''/></div>
                                    <div className='info-val'>sauravmodi03@gmail.com</div>
                                </div>
                                <div className="contact-info slide-right">
                                    <div><img src={this.props.darkTheme ? wwwL : www} alt=''/></div>
                                    <a href="https://www.smodi.co.in" className='info-val'>https://www.smodi.co.in</a>
                                </div>
                                <div className="contact-info slide-right">
                                    <div><img src={this.props.darkTheme ? phoneblackL :  phoneblack} alt=''/></div>
                                    <div className='info-val'>+1 312 478 1958</div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
        );
    };
}

export default Contact;