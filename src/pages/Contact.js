
import React, {useRef, useState, useEffect} from 'react';
import '../css/Contact.scss';
import emailjs from '@emailjs/browser';
import phoneblack from '../img/phoneblack.png';
import markerblack from '../img/markerblack.png';
import mailblack from '../img/mailblack.png';

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

    use

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
                    <div id="label">
                        <div className="wrapper">
                            <div data-inviewport="scale-in" id="S" className="letter">C</div>
                        </div>
                        <div className="wrapper">
                            <div data-inviewport="scale-in" id="K" className="letter">O</div>
                        </div>
                        <div className="wrapper">
                            <div data-inviewport="scale-in" id="I" className="letter">N</div>
                        </div>
                        <div className="wrapper">
                            <div data-inviewport="scale-in" id="L" className="letter">T</div>
                        </div>
                        <div className="wrapper">
                            <div data-inviewport="scale-in" id="L-s" className="letter">A</div>
                        </div>
                        <div className="wrapper">
                            <div data-inviewport="scale-in" id="S-s" className="letter">C</div>
                        </div>
                        <div className="wrapper">
                            <div data-inviewport="scale-in" id="S-s" className="letter">T</div>
                        </div>
                    </div>
                    <main>
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
                    </main>
                </div>
        );
    };
}

export default Contact;