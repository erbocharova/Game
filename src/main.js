import Phaser from 'phaser'
import HelloWorldScene from './scenes/HelloWorldScene'


var config = {
	type: Phaser.AUTO,
	width: 1024,
	height: 576,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			debug: false
		}
	},
	scene: [HelloWorldScene]
	
};


export default new Phaser.Game(config)

