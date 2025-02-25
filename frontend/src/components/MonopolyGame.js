// src/components/MonopolyGame.js
import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import MonopolyScene from './MonopolyScene'; // Adjust the import path as needed

const MonopolyGame = () => {
  const gameContainerRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: gameContainerRef.current,
      scene: [MonopolyScene],
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={gameContainerRef} />;
};

export default MonopolyGame;
