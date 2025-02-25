// src/components/MonopolyScene.js
import Phaser from 'phaser';

class MonopolyScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MonopolyScene' });
  }

  preload() {
    // Load the game board image
    this.load.image('board', 'assets/board.png');

    // Load token images
    this.load.image('token1', 'assets/token1.png');
    this.load.image('token2', 'assets/token2.png');
    // Load additional tokens as needed

    // Load dice images
    this.load.image('dice1', 'assets/dice1.png');
    this.load.image('dice2', 'assets/dice2.png');
    // Load images for all dice faces

    // Load chance and community chest cards
    this.load.image('chanceCard', 'assets/chanceCard.png');
    this.load.image('communityChestCard', 'assets/communityChestCard.png');

    // Load audio files
   
    // Load additional audio files as needed
  }

  create() {
    // This method is called after preload completes
    // Initialize your game objects here
    this.add.image(400, 300, 'board');
    // Add additional game setup code here
  }
}

export default MonopolyScene;
