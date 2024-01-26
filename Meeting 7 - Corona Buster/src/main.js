import Phaser from 'phaser';
import CoronaBusterScene from './scenes/CoronaBusterScene';

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
    scene: [CoronaBusterScene],
}

export default new Phaser.Game(config)
