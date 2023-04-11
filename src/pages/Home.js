import { Link } from 'react-scroll';
import '../css/HomeStyle.scss';
import manLogo from '../img/man.png';
import arrow from '../img/arrow-up-b.png';
import downArrow from '../img/arrow.png';
import self from '../img/self.png';
import { useEffect, useState } from 'react';
import resumeqr from '../img/ResumeQR.png';
import QRlogo from '../img/QR-black.png';
import Resume from '../data/Resume.pdf';


function Home() {

    const[avatar, showAvatar] = useState(true);

    window.addEventListener('scroll', function(){
        if(window.scrollY > 20) {
            document.getElementById("scroller-wrapper").style.display = "none";
            document.getElementById("top-scroll-wrapper").style.width = "2.5em";
        }else{
            document.getElementById("scroller-wrapper").style.display = "grid";
            document.getElementById("top-scroll-wrapper").style.width = "0";
        }
    });

    useEffect(() => {
        var element = document.getElementById("avatar-container");

        element.addEventListener("mouseenter",function(){
            showAvatar(false);
            console.log("Mouseenter");
        });

        element.addEventListener("mouseleave",function(){
            showAvatar(true);
            console.log("Mouseleave");
        });
    });

    const manageQR = () => {
        var qrcode = document.querySelector(".resume-qr");
        qrcode.classList.toggle("show-qr");
    }

    return (
        <div id="home" className="Home flex-top-padding">
            <article>
                <section id="avatar-container" className="avatar-container">
                    <img id="avatar" className="avatar" src={manLogo} alt="Avatar Logo"/>
                </section>
                <section className="info">
                <span className='info-l2 info-bg'>Hi, I'm Saurav.</span>
                    {/* <span className='info-l1 info-bg'>Hi, I'm Saurav!</span> */}
                    <span className='info-l3 info-bg'>I am a Software Engineer specialized in creating exceptional digital experiences, combining my technical 
                    expertise with design skills. I design and build innovative software solutions to help businesses streamline their processes and achieve their goals.
                    </span>
                    <div className='resume-link-wrap'>
                        <a href={Resume} className="resumeLink" download="Resume_SauravModi">
                            <span>Resume</span>
                            <div className='download-wrapper'>
                                <img src={downArrow} alt="arrow logo"/>
                            </div>
                        </a>
                        <div onClick={manageQR} className="qr-wrapper">
                            <img id="qr-logo" src={QRlogo} alt="QR logo"/>
                        </div>
                    </div>
                    {/* <span className='hire-link-wrap'>
                        <nav id="hire-nav"><Link id="hire-me" to='contact' activeClass="active" className="scale" spy={true} smooth={true} duration={500} >Hire Me</Link></nav>
                    </span> */}
                </section>
            </article>
            <Link id="scroller-wrapper" className='scroller-wrapper' to='about' spy={true} smooth={true} duration={500}>
                <div className='scroller'></div>
            </Link>
            <Link id="top-scroll-wrapper" className='top-scroll-wrapper' to='home' spy={true} smooth={true} duration={500}>
                <div className='top-scroll'><img src={arrow} alt="Arrow logo"/></div>
            </Link>
        </div>
    );
}

export default Home;