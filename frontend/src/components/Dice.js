import React, { useState } from "react";
import "./Dice.css"; // Ensure you create this CSS file for styling

const Dice = ({ onRoll }) => {
  const [diceValue, setDiceValue] = useState(1);

  const roll = () => {
    const newRoll = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newRoll);
    onRoll(newRoll);
  };

  return (
    <div className="dice-container">
      <div className={`dice dice-${diceValue}`}>{diceValue}</div>
      <button onClick={roll} className="roll-btn">🎲 Roll Dice</button>
    </div>
  );
};

export default Dice;
