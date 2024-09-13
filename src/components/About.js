// Import Assets
import profile from '../assets/profile.png';
import cleaner from '../assets/alchemy_refiner_alchemy_magic_0_13b64282-0d79-460c-84d7-97d5ed7421df_0.jpg'
import { useSelector } from 'react-redux';
import ScrollH1 from './ScrollH1';

const About = () => {
    const reviewScroll = useSelector(state => state.scroll.about)


    return (
        <section className='about'>
            <img src={cleaner} />
            
            <ScrollH1 text="About Us" dispatchValue={'ABOUT'} classsData={reviewScroll} />

            <h2>About Us</h2>
                <p>
                Welcome to Skene Clean, where two brothers are turning their passion into pristine perfection. 
                We’re not just a home service company; we’re a family dedicated to making your home shine with unparalleled care and commitment.
                Founded by brothers Graham and Evan Skeen, 
                our journey began with a shared vision of delivering exceptional home services with a personal touch. 
                With our combined experience, we’ve honed our skills to ensure that every task—from window cleaning and 
                pressure washing to installing Christmas lights and gutter cleaning—is executed with meticulous attention to detail.                
                </p>

            <h2>Our Passion</h2>
                <p>
                Our passion for excellence drives us to go above and beyond with every project. 
                Whether it’s removing stubborn grime from your windows, ensuring your gutters are clear and functioning perfectly, 
                or bringing holiday cheer with our expertly hung Christmas lights, we pour our heart into every job. 
                We understand that your home is a reflection of you, and we treat it with the respect it deserves.
                </p>

        </section>
    );
}

export default About;