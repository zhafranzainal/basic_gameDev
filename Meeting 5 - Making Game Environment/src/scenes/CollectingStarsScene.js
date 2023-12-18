import Phaser from 'phaser';

export default class CollectingStarsScene extends Phaser.Scene {

	constructor() {
		super('collecting-stars-scene');
	}

	preload() {
		this.load.image('platform', 'images/platform.png');
	}

	create() {
		this.add.image(960, 540, 'platform');
	}

}
