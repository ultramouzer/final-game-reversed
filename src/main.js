let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 720,
    scene: [/*Menu,*/ Play],
    scale: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    physics:{
        default:'arcade',
        arcade:{debug:false}
    },
}

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyUp, keyDown, keyLeft, keyRight, keySpace;

// game settings
game.settings = {
    maxTokens: 5,
    defaultTokenSpeed: 1,
}

game.global = {
    timeDilation: 1,
    destroyedTokens: false,
}