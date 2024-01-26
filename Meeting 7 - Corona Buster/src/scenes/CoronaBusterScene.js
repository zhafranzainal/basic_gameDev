import Phaser from 'phaser';

export default class CoronaBusterScene extends Phaser.Scene {

    constructor() {
        super('corona-buster-scene');
    }

    init() {
        this.clouds = undefined;
    }

    preload() {
        this.load.image('background', 'images/bg-layer1.png');
        this.load.image('cloud', 'images/cloud.png');
    }

    create() {

        const gameWidth = this.scale.width * 0.5;
        const gameHeight = this.scale.height * 0.5;

        this.add.image(gameWidth, gameHeight, 'background');

        this.clouds = this.physics.add.group({
            key: 'cloud',
            repeat: 10,
        })

        Phaser.Actions.RandomRectangle(
            this.clouds.getChildren(),
            this.physics.world.bounds
        )

    }

    update(time) {

        this.clouds.children.iterate((child) => {
            child.setVelocityY(20);
        })

    }

}
