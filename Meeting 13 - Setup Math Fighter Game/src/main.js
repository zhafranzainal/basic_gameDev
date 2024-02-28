import Phaser from 'phaser';
import MathFighterScene from './scenes/MathFIghterScene';

const config = {
    type: Phaser.AUTO,
    parent: 'app',
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
        },
    },
    scene: [MathFighterScene],
}

export default new Phaser.Game(config);
