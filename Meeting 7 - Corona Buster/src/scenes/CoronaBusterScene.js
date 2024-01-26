import Phaser from 'phaser';

export default class CoronaBusterScene extends Phaser.Scene {

    constructor() {
        super('corona-buster-scene');
    }

    preload() {
        this.load.image('', 'images/');
    }

    create() {
        this.add.image(960, 540, '');
    }

}
