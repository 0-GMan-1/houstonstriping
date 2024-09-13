import { useDispatch } from "react-redux";

const Experience = () => {
    const dispatch = useDispatch()


    const clickHandler = () => {
        dispatch({type: 'QUOTE_STARTED'})
    }

    return (
        <div className="experience">
            <h2>Why Choose Us?</h2>

            <ul>
                <li>
                    <i>EXPERT WINDOW CLEANING</i>
                    <ul>
                        <li>Sparkling clean windows that brighten your home and enhance its curb appeal.</li>
                    </ul>
                </li>
                <li>
                    <i>PRESSURE WASHING</i>
                    <ul>
                        <li>Effective and efficient removal of dirt, mold, and grime to rejuvenate your property’s exterior.</li>
                    </ul>
                </li>
                <li>
                    <i>CHRISTMAS LIGHTS INSTALLATION</i>
                    <ul>
                        <li>Professional and festive lighting displays that make your holidays magical and stress-free.</li>
                    </ul>
                </li>
                <li>
                    <i>GUTTER CLEANING</i>
                    <ul>
                        <li>Thorough and reliable gutter maintenance to prevent water damage and keep your home in top shape.</li>
                    </ul>
                </li>
                <li>
                    <i>SNOW REMOVAL</i>
                    <ul>
                        <li>Snow Removal: Swift and dependable snow removal services that keep your driveway and walkways safe and accessible during the winter months.</li>
                    </ul>
                </li>
            </ul>
            <p>
                We’re proud to be a family-owned business where every job is treated with the utmost care and attention. Thank you for considering Skene Clean for your home service needs. 
                We look forward to the opportunity to bring our passion and expertise to your home.
                Contact us today and experience the difference that dedication and care can make!

                <button className="buttonhead" onClick={clickHandler}>
                    <p>click now to get a free quote!</p>
                    <p>or call</p>
                    <p className='phone'>+1 551-364-3002</p>
                </button>
            </p>
        </div>
    );
}

export default Experience;