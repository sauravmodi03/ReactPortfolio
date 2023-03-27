import { Link } from 'react-scroll';
import '../css/HomeStyle.scss';
import manLogo from '../img/man.png';

function Home() {
    return (
        <div id="home" className="Home">
            <section className="info">
                <span className='info-l1 info-bg'>Hi,</span>
                <span className='info-l2 info-bg'>I am Saurav!</span>
                <span className='info-l3 info-bg'>Crafting innovative solutions through code.</span>
                <nav id="hire-nav"><Link id="hire-me" to='contact' activeClass="active" className="scale" spy={true} smooth={true} duration={500} >Hire Me</Link></nav>
            </section>
            <section id="avatar-container">
                <span>
                    <img id="avatar" src={manLogo} alt="Avatar Logo"/>
                </span>
            </section>
        </div>
    );
}

export default Home;