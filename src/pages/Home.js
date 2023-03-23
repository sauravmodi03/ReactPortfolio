
import { Link } from 'react-scroll';
import '../css/HomeStyle.css';

function Home() {
    return (
        <div id="home" className="Home">
            <section className="info">
                    <span className='info-l1 info-bg'>Hi,</span>
                    <span className='info-l2 info-bg'>I am Saurav!</span>
                    <span className='info-l3 info-bg'>
                        Full stack developer with strong understanding of programming languages such as HTML, CSS, 
                        JavaScript, Java and framework knowledge such as Angular, React, and Bootstrap.
                    </span>
                    <nav id="hire-nav"><Link id="hire-me" to='contact' activeClass="active" className="scale" spy={true} smooth={true} duration={500} >Hire Me</Link></nav>
            </section>
        </div>
    );
}

export default Home;