import React, { useState, useEffect, useRef } from 'react';
import {useDispatch} from 'react-redux'
import '../ScrollH1.css'; // Import CSS for styling

const ScrollH1 = ({ text, dispatchValue, classsData }) => {
  const [scrolling, setScrolling] = useState(false);
  const h1Ref = useRef(null);
  const originalTop = useRef(0);
  const dispatch = useDispatch()

  useEffect(() => {
    const handleScroll = () => {
      const h1Element = h1Ref.current;
      if (!h1Element) return;

      const scrollTop = window.scrollY;

      const shouldStick = scrollTop > originalTop.current
      const shouldUnstick = scrollTop < originalTop.current
      
      if (shouldUnstick) {
        setScrolling(false);
      } else if (shouldStick) {
        setScrolling(true);
        dispatch({type: dispatchValue})
      }
    };

    if (h1Ref.current) {
      originalTop.current = h1Ref.current.offsetTop;
    }


    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    handleScroll();

    return () => {
      // Clean up event listeners
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1 className={`scrolling-heading ${scrolling && classsData ? 'scrolling' : ''}`} ref={h1Ref}>
        {text}
      </h1>
      <div className={`placeholder ${scrolling && classsData ? 'scrolling' : ''}`}/>
    </div>
  );
};

export default ScrollH1;