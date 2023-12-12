import Phaser from 'phaser'
 
class ProceduralLevelGenerator
{
    minLenght = 1;
    maxLenght = 6;
    levelLenght = 31;
    platformList = [];

    getRandomInRange(minLenght, maxLenght)
    {
        return Math.floor(Math.random() * (maxLenght - minLenght + 1) + minLenght);
    }

    startPositionGenerator()
    {
        let rightEdge = getRandomInRange(minLenght, maxLenght);
        let platform = new Platform(0, rightEdge, 6);
        platformList.push(platform);
    }

    generateNextPlatform()
    {
        let lastRightEdge = platformList.at(-1).rightEdge;
        let lastHeight = platformList.at(-1).platformHeight;

        let leftEdge = lastRightEdge + getRandomInRange(1, 3);
        let platformHeight = lastHeight + getRandomInRange(-3, 3);
        let rightEdge = getRandomInRange(this.minLenght, this.maxLenght);
        let platform = new Platform(leftEdge, rightEdge, platformHeight);
        platformList.push(platform);
    }

    convertToPixels()
    {
        for (let platform in this.platformList)
        {
        }
    }

    generateLevel()
    {
        platformList = [];
        startPositionGenerator();
        let final = this.levelLenght - 9;
        while (platformList.at(-1).rightEdge < final)
        {
            generateNextPlatform();
        }
        let platform = new Platform(final - this.maxLenght, final, 0);
        platformList.push(platform);
    }
}

class Platform
{
    tileSize = 32;

    constructor(leftEdge, rightEdge, platformHeight)
    {
        this.leftEdge = leftEdge;
        this.rightEdge = rightEdge;
        this.platformHeight = platformHeight;
    }
}