import { Link } from 'react-scroll';
import '../css/HomeStyle.scss';
import manLogo from '../img/man.png';
import arrow from '../img/arrowup.png';

function Home() {
    return (
        <div id="home" className="Home flex-top-padding">
            <article>
                <section className="info">
                    <span className='info-l1 info-bg'>Hi,</span>
                    <span className='info-l2 info-bg'>I'm Saurav!</span>
                    <span className='info-l3 info-bg'>I design and build innovative software solutions to help 
                                businesses streamline their processes and achieve their goals.</span>
                    <span className='hire-link-wrap'>
                        <nav id="hire-nav"><Link id="hire-me" to='contact' activeClass="active" className="scale" spy={true} smooth={true} duration={500} >Hire Me</Link></nav>
                    </span>
                </section>
                <section id="avatar-container">
                    <img id="avatar" src={manLogo} alt="Avatar Logo"/>
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