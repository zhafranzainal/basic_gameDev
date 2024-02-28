import Phaser from 'phaser';

export default class MathFighterScene extends Phaser.Scene {

    constructor() {
        super('math-fighter-scene');
    }

    init() {
    }

    preload() {

        this.load.image('background', 'images/bg_layer1.png');
        this.load.image('fight-bg', 'images/fight-bg.png');
        this.load.image('tile', 'images/tile.png');
        this.load.image('start-btn', 'images/start_button.png');

        this.load.spritesheet('player', 'images/warrior1.png', {
            frameWidth: 80,
            frameHeight: 80
        });

        this.load.spritesheet('enemy', 'images/warrior2.png', {
            frameWidth: 80,
            frameHeight: 80
        });

        this.load.spritesheet('numbers', 'images/numbers.png', {
            frameWidth: 131,
            frameHeight: 71.25
        });

        this.load.spritesheet('slash', 'images/slash.png', {
            frameWidth: 42,
            frameHeight: 88
        });

    }

    create() {

        this.add.image(240, 320, 'background');

        const fight_bg = this.add.image(240, 160, 'fight-bg');
        const tile = this.physics.add.staticImage(240, fight_bg.height - 40, 'tile');

    }

    update() {
    }

}
