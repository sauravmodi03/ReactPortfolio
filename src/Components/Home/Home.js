import '../../App.css';
import './HomeStyle.css';
import Flyer from '../Flyer/Flyer';

function Home() {
    return (
        <div className="Home ">
            <Flyer/>
            <main className='Home-main bg-main'>
                <section className="info">
                        <span className='info-l1 info-bg'>Hi,</span>
                        <span className='info-l2 info-bg'>I am Saurav...!!!</span>
                        <span className='info-l3 info-bg'>
                            Full stack developer with strong understanding of programming languages such as HTML, CSS, 
                            JavaScript, Java and framework knowledge such as Angular, React, and Bootstrap.
                        </span>
                </section>
            </main>
        </div>
    );
}

export default Home;