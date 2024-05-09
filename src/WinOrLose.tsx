import React from 'react';
import './WinOrLose.css';
import suiiImage from './assets/suii.png';

interface WinOrLoseProps {
  won: boolean;
  choice: 'above' | 'lucky' | 'below';
}

const WinOrLose: React.FC<WinOrLoseProps> = ({ won, choice }) => {
  return (
    <div>
      {won ? (
          <section className="win-text">
            <h2>Congratulations! You guessed correctly</h2>
            <img className src={suiiImage} />
          </section>  
      ) : (
          <section className="loss-text">
            <h2>Oh no! You guessed incorrectly</h2>
          </section>  
      )}
    </div>
  );
};

export default WinOrLose;
