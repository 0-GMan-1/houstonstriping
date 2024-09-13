import React from 'react';
import useFadeInOnScroll from '../Interactions/Fade.js';

const FadeInComponent = () => {
  const [ref, isVisible] = useFadeInOnScroll({
    threshold: 0.1 // Adjust this threshold as needed
  });

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? 'fade-in-visible' : ''}`}
    >
    </div>
  );
};

export default FadeInComponent;