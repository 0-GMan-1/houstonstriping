// Import Assets
import ColoredLine from './ColoredLine';
import AnimatedNumbers from "react-animated-numbers";
import { useState, useEffect } from 'react';
import {ScrollH1} from '..'
import banner from '../assets/291863070_421037063372030_8590632365262978750_n.jpg'
import {useDispatch} from 'react-redux'

const Header = () => {
    const [num, setNum] = useState(4000);

    const dispatch = useDispatch()

    const clickHandler = () => {
        dispatch({type: 'QUOTE_STARTED'})
    }

    useEffect(() => {
        // Function to update the number
        const updateNumber = () => {
          setNum(prevNumber => prevNumber + 1); // Increment the number or update as needed
        };
    
        // Set up the interval to update the number every 30 minutes (1800000 milliseconds)
        const intervalId = setInterval(updateNumber, 180000);
    
        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
      }, []);

    return (
        <section className='header'>
          <div className='headerimgcontainer'>
            <img src={banner} />
          </div>  
            <div className='header__content'>
                <p>WEBSITE UPDATE WORK IN PROGRESS
                </p>
                <ColoredLine color={'#FFFFFF'} />
                <button className="buttonhead" onClick={clickHandler}>
                    <p>click now to get a free quote!</p>
                    <p>or Call</p>
                    <p className='phone'>+1 346-639-9979</p>
                </button>
            </div>
        </section>
    );
}

export default Header;