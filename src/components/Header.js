// Import Assets
import ColoredLine from './ColoredLine';
import AnimatedNumbers from "react-animated-numbers";
import { useState, useEffect } from 'react';
import {ScrollH1} from '..'
import banner from '../assets/logowebsite.jpg'
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
            <img className='headerimg' src={banner} />
          </div>  
            <div className='header__content'>
                <p>Windows cleaned in Calgary:
                  <div> 
                    
                    <AnimatedNumbers
                        includeComma
                        transitions={(index) => ({
                        type: "spring",
                        duration: index + 0.3,
                        })}
                        animateToNumber={num}
                        fontStyle={{
                        fontSize: 40,
                        color: "white",
                        }}
                    />

                  </div>  
                </p>
                <ColoredLine color={'#FFFFFF'} />
                <button className="buttonhead" onClick={clickHandler}>
                    <p>click now to get a free quote!</p>
                    <p>or Call</p>
                    <p className='phone'>+1 551-364-3002</p>
                </button>
            </div>
        </section>
    );
}

export default Header;