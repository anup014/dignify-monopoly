import React from 'react';
import Lottie from 'lottie-react';
import congratsAnimation from '../../assets/congrats.json';

const Congratulations = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Congratulations! 🎉</h1>
      <Lottie animationData={congratsAnimation} style={{ width: 300, height: 300 }} />
      <p>You've successfully completed the game!</p>
    </div>
  );
};

export default Congratulations;
