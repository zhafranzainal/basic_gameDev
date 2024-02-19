import Phaser from 'phaser';

export default class GameOverScene extends Phaser.Scene {

    constructor() {
        super('over-scene');
    }

    init(data) {
        this.replayButton = undefined;
        this.score = data.score;
    }

    preload() {
        this.load.image('background', 'images/bg-layer1.png');
        this.load.image('gameover', 'images/gameover.png');
        this.load.image('replay-button', 'images/replay.png');
    }

    create() {
        this.add.image(200, 320, 'background');
        this.add.image(200, 200, 'gameover');
        this.add.text(100, 300, 'Score: ' + this.score, {
            fontSize: '32px',
            // @ts-ignore
            fill: 'black'
        });
    }

}
