import React, { useEffect, useRef } from "react";
import Phaser from "phaser";

const MonopolyBoard = () => {
  const gameContainer = useRef(null);

  useEffect(() => {
    // Prevent multiple instances of the game
    if (gameContainer.current.childNodes.length > 0) return;

    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 800,
      parent: gameContainer.current,
      physics: { default: "arcade", arcade: { debug: false } },
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };

    const game = new Phaser.Game(config);

    function preload() {
      this.load.image("board", "/assets/monopoly-board.png"); // Add Monopoly board image to /public/assets/
      this.load.image("player", "/assets/player-token.png"); // Add player token image to /public/assets/
    }

    function create() {
      this.add.image(400, 400, "board").setScale(1.1); // Monopoly board
      this.player = this.physics.add.sprite(100, 100, "player").setScale(0.5); // Player token
    }

    function update() {}

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={gameContainer} />;
};

export default MonopolyBoard;
