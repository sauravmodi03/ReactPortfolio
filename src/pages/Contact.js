
import React, {useRef, useState, useEffect} from 'react';
import '../css/Contact.scss';
import emailjs from '@emailjs/browser';
import phoneblack from '../img/phoneblack.png';
import markerblack from '../img/markerblack.png';
import mailblack from '../img/mailblack.png';
import Label from './Label';

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
        console.log("contact");
        const innerWidth = document.documentElement.clientWidth;
        const innerHeight = document.documentElement.clientHeight;

        document.addEventListener('scroll',function(){
            const wrapper = document.querySelector(".contact-wrapper");
            const form = document.querySelector(".contact-form");
            const info = document.querySelector(".contact-info-wrapper");
            
            const wrapperY = wrapper.getBoundingClientRect().y;
            const elementHeight = wrapper.getBoundingClientRect().height;

            if(innerHeight > wrapperY + elementHeight/4){
                wrapper.style.animation = "contact-fadeIn 1.5s forwards";
                form.style.animation = "form-slideInTop 1.5s forwards";
                info.style.animation = "infoWrapper-slideInRight 1.5s forwards";
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

    useEffect


    sendEmail = (e) => {
        e.preventDefault();
        console.log("contact form");
        document.getElementById("email-confirm").classList.toggle("show-confirm");
        // emailjs.sendForm('service_5c7wcd9', 'template_egunr9p', this.form.current, 'ihO1q38-DIyH5MRpz')
        //   .then((result) => {
        //       document.getElementById("email-confirm").classList.add("show-confirm");
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
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
                    <Label name="CONTACT"/>
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
                            <label>Contact information.</label>
                            <p>Please feel free to contact.</p>
                            <article className='info-article'>
                                <div className="contact-info">
                                    <div><img src={markerblack} alt=''/></div>
                                    <div className='info-val'>400 E 33RD ST, Chicago, Illinoi - 60616, USA</div>
                                </div>
                                <div className="contact-info">
                                    <div><img src={mailblack} alt=''/></div>
                                    <div className='info-val'>sauravmodi03@gmail.com</div>
                                </div>
                                <div className="contact-info">
                                    <div><img src={markerblack} alt=''/></div>
                                    <div className='info-val'>Website</div>
                                </div>
                                <div className="contact-info">
                                    <div><img src={phoneblack} alt=''/></div>
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