import Phaser from 'phaser';

export default class MathFighterScene extends Phaser.Scene {

    constructor() {
        super('math-fighter-scene');
    }

    preload() {
        this.load.image('', 'images/');
    }

    create() {
        this.add.image(960, 540, '');
    }

}
