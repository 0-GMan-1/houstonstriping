// Import Assets
import christmasLights from '../assets/Christmas Lights Decoration.jpg';
import window from '../assets/Modern building glass wall.jpg';
import gutter from '../assets/Old roof tiles.jpg';
import snow from '../assets/ant-rozetsky-H9m6mfeeakU-unsplash.jpg'
import pressurewashing from '../assets/the-graphic-space-N8JTVOmHU7A-unsplash.jpg'
import ColoredLine from './ColoredLine'
import YoutubeEmbed from './YoutubeEmbed'
import ScrollH1 from './ScrollH1'
import FadeInComponent from './FadeComponent';
import useFadeInOnScroll from '../Interactions/Fade';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Projects = () => {
    const [fadeRef, isVisible] = useFadeInOnScroll({
        threshold: 1 // Adjust this threshold as needed
      });

      const scrollServices = useSelector(state => state.scroll.services)

    return (
        <section className="projects">
            <div className='projects__main'>
            <ScrollH1 text="Services" dispatchValue={'SERVICES'} classsData={scrollServices} />
                <div className="projects__card__main">
                    <h3>Expert Window Cleaning And Detailing</h3>                    
                    <img src={window} alt="Uniswap Swap Page" />
                    <p ref={fadeRef} className={`fade-in ${isVisible ? 'fade-in-visible' : ''}`}>
                        Professional, Stunning, Spotless, just a few words people use to describe our Window Cleaning
                        this dedication, combined with our solution that we use on windows, ensures that your windows will be pristine
                        and will stay like that for a long time
                    </p>
                    <hr color={'#000000'}/>
                </div>
            </div>
            
            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Pressure Washing</h3>
                    <img src={pressurewashing}/>
                    <p>
                    Revitalize the appearance of your property with our high-quality pressure washing services. 
                    We remove dirt, grime, and stains from surfaces like driveways, patios, and siding to restore their original shine. 
                    Our professional pressure washing ensures a clean, refreshed look for your home or business.
                    </p>
                </div>

                <div className="projects__card">
                    <h3>Gutter Cleaning</h3>
                    <img src={gutter} alt="Compound Landing Page" />
                    <p>
                    Ensure your home’s gutters are free from debris and functioning properly with our expert gutter cleaning services. We offer 
                    thorough inspections and efficient cleaning 
                    to prevent water damage and maintain the integrity of your roof. Trust our team for reliable and affordable gutter maintenance.
                    </p>
                </div>

                <div className="projects__card">
                    <h3>Christmas Lights</h3>
                    <img src={christmasLights}/>
                    <p>
                    Transform your home into a festive wonderland with our holiday lighting services. We specialize in custom holiday 
                    light installations that bring joy and cheer to your property. 
                    From design, to setup, to taking it down after the holidays, our team ensures a dazzling display that enhances 
                    your home’s curb appeal during the holiday season.
                    </p>
                </div>

                <div className="projects__card">
                    <h3>Snow Removal</h3>
                    <img src={snow}/>
                    <p>
                    Keep your property safe and accessible this winter with our prompt and reliable snow removal services. 
                    Our team handles snow plowing, salting, and de-icing to ensure clear driveways and walkways. 
                    Enjoy peace of mind and a hassle-free winter with our professional snow removal solutions.
                    </p>
                </div>

            </div>
            <ColoredLine color="#e8e8e8" />
        </section>
    );
}

export default Projects;