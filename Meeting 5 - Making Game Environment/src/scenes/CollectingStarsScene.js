import Phaser from 'phaser';

export default class CollectingStarsScene extends Phaser.Scene {

	constructor() {
		super('collecting-stars-scene');
	}

	preload() {

		this.load.image('platform', 'images/platform.png');
		this.load.image('star', 'images/star.png');
		this.load.image('sky', 'images/sky.png');
		this.load.image('bomb', 'images/bomb.png');

		this.load.spritesheet('dude', 'images/dude.png', {
			frameWidth: 32,
			frameHeight: 48
		});

	}

	create() {
		this.add.image(960, 540, 'platform');
	}

}
