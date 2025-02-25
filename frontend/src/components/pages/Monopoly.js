import React, { useState } from "react";
import "../../styles/Monopoly.css";

// Monopoly board positions for each of the 40 spaces (X, Y coordinates)
const boardPositions = [
  [40, 920], [140, 920], [240, 920], [340, 920], [440, 920], [540, 920], [640, 920], [740, 920], [840, 920], [920, 920], 
  [920, 820], [920, 720], [920, 620], [920, 520], [920, 420], [920, 320], [920, 220], [920, 120], [920, 20], 
  [820, 20], [720, 20], [620, 20], [520, 20], [420, 20], [320, 20], [220, 20], [120, 20], [40, 20], [0, 20],  
  [0, 120], [0, 220], [0, 320], [0, 420], [0, 520], [0, 620], [0, 720], [0, 820], [0, 920]
];

// Property prices for 40 board spaces (-1 means not purchasable)
const propertyPrices = [
  -1, 60, -1, 100, -1, 120, 140, -1, 160, 180, 
  -1, 200, -1, 220, -1, 240, 260, -1, 280, -1, 
  300, 320, -1, 350, -1, 380, -1, 400, -1, 420, 
  -1, 450, -1, 480, -1, 500, 520, -1, 540, -1
];

const Monopoly = () => {
  const [dice, setDice] = useState(1);
  const [player1Pos, setPlayer1Pos] = useState(0);
  const [player2Pos, setPlayer2Pos] = useState(0);
  const [player1Money, setPlayer1Money] = useState(1500);
  const [player2Money, setPlayer2Money] = useState(1500);
  const [turn, setTurn] = useState(1); // 1 = Player 1, 2 = Player 2
  const [ownedProperties, setOwnedProperties] = useState({}); // Stores who owns which property

  // Function to roll the dice
  const rollDice = () => {
    const newDice = Math.floor(Math.random() * 6) + 1;
    setDice(newDice);

    let newPosition;
    if (turn === 1) {
      newPosition = (player1Pos + newDice) % 40;
      handleTransaction(1, newPosition);
      setPlayer1Pos(newPosition);
      setTurn(2); // Switch to Player 2
    } else {
      newPosition = (player2Pos + newDice) % 40;
      handleTransaction(2, newPosition);
      setPlayer2Pos(newPosition);
      setTurn(1); // Switch back to Player 1
    }
  };

  // Handle Buying Properties or Paying Rent
  const handleTransaction = (player, position) => {
    if (propertyPrices[position] === -1) return; // Space is not purchasable

    if (!ownedProperties[position]) {
      // Property is not owned, ask to buy
      const price = propertyPrices[position];
      if (player === 1 && player1Money >= price) {
        setPlayer1Money(player1Money - price);
        setOwnedProperties({ ...ownedProperties, [position]: 1 });
      } else if (player === 2 && player2Money >= price) {
        setPlayer2Money(player2Money - price);
        setOwnedProperties({ ...ownedProperties, [position]: 2 });
      }
    } else if (ownedProperties[position] !== player) {
      // Pay Rent (Rent is 10% of the property price)
      const rent = propertyPrices[position] * 0.1;
      if (player === 1) {
        setPlayer1Money(player1Money - rent);
        setPlayer2Money(player2Money + rent);
      } else {
        setPlayer2Money(player2Money - rent);
        setPlayer1Money(player1Money + rent);
      }
    }
  };

  return (
    <div className="monopoly-container">
      {/* Monopoly Board */}
      <img src={process.env.PUBLIC_URL + "/images/board.png.webp"} alt="Monopoly Board" className="monopoly-board" />

      {/* Player 1 Token */}
      <div 
        className="player-token player1"
        style={{
          left: `${boardPositions[player1Pos][0]}px`,
          top: `${boardPositions[player1Pos][1]}px`
        }}
      >
        🔴
      </div>

      {/* Player 2 Token */}
      <div 
        className="player-token player2"
        style={{
          left: `${boardPositions[player2Pos][0]}px`,
          top: `${boardPositions[player2Pos][1]}px`
        }}
      >
        🔵
      </div>

      {/* Dice */}
      <div className="dice-container">
        <img src="/images/dice-1963036_1280.jpg" alt={`Dice ${dice}`} className="dice" />
      </div>

      {/* Roll Dice Button */}
      <button onClick={rollDice} className="roll-dice-btn">
        {turn === 1 ? "Player 1 Roll Dice" : "Player 2 Roll Dice"}
      </button>

      {/* Player Money & Transactions */}
      <div className="money-container">
        <p>💰 Player 1 Money: ₹{player1Money}</p>
        <p>💰 Player 2 Money: ₹{player2Money}</p>
      </div>
    </div>
  );
};

export default Monopoly;
