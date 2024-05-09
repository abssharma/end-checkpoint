import React, { useState } from 'react';
import TotalSum from './TotalSum';
import WinOrLose from './WinOrLose';
import './GameLogic.css';

const GameLogic: React.FC = () => {
  const [diceSum, setDiceSum] = useState<number>(0);
  const [won, setWon] = useState<boolean | null>(null);
  const [choice, setChoice] = useState<'above' | 'lucky' | 'below' | ''>('');

  // Simulates rolling two dice and returns their sum
  const rollDice = () => Math.floor(1 + Math.random() * 6) + Math.floor(1 + Math.random() * 6);

  const handleGameChoice = (userChoice: 'above' | 'lucky' | 'below') => {
    const sum = rollDice();
    setDiceSum(sum); // Update the state with the dice sum
    setChoice(userChoice); // Update the state with the user's choice

    // Determine if the user won based on their choice
    let gameWon = false;
    if ((userChoice === 'above' && sum > 7) ||
        (userChoice === 'lucky' && sum === 7) ||
        (userChoice === 'below' && sum < 7)) {
      gameWon = true;
    }

    setWon(gameWon); // Update the state with the game outcome

  };

  return (
    <div>
        <center>
        
            <h1>Place Your Bets! </h1>
            <br></br>
            <br></br>
            <section className="above-lucky-below-text">
                  <h1><section className="above7-text"> Above 7 </section></h1>
                  <h1><section className="lucky7-text"> Lucky 7 </section></h1>
                  <h1><section className="below7-text"> Below 7 </section></h1>
                  
            </section>
            <button className="above7" onClick={() => handleGameChoice('above')}>∞</button>
            <button className="lucky7" onClick={() => handleGameChoice('lucky')}>∞</button>
            <button className="below7" onClick={() => handleGameChoice('below')}>∞</button>
        </center>    
      {diceSum > 0 && (
        <>
          <TotalSum sum={diceSum} />
          {won !== null && <WinOrLose won={won} choice={choice} />}
        </>
      )}
    </div>
  );
};

export default GameLogic;
