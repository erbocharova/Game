import Phaser from 'phaser'
import ProceduralLevelGenerator from './scenes/ProceduralLevelGenerator.js'
 
export default class GameScene extends Phaser.Scene
{
    constructor()
    {
        super('game-scene')
    }
 
    preload()
    {
        this.load.image('background0', 'assets/Tileset/Background/Day/1.png');
	    this.load.image('background1', 'assets/Tileset/Background/Day/day.png');
        this.load.image('background2', 'assets/Tileset/Background/Day/6.png');
        this.load.image('tile', 'assets/Tileset/1 Tiles/Tiles_01.png');
    }

    create()
    {
        this.add.image(512, 288, 'background0');
	    this.add.image(512, 288, 'background1');
        this.add.image(512, 288, 'background2');
        this.add.image(512, 288, 'tile');
    }
}
    
