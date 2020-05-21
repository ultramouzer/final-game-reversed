class Token extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // add to existing, displayList, updateList
        this.score = 10;
        this.speed = game.settings.defaultTokenSpeed;
    }

    update(){
        if(game.global.timeDilation >= 0){
            this.y -= this.speed * game.global.timeDilation;
        } else {
            console.log("Max time dilation has been reached!");
        }

        if(this.y <= 0 - this.height){
            console.log("Replacing token");
            this.reset();
            //this.destroy();
            game.global.destroyedTokens = true;
        }
    }

    reset(){
        this.x = 400 + 400 * Math.random();
        this.y = game.config.height + 400 * Math.random();
    }
}