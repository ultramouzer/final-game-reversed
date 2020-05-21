class Ball extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame,) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // add to existing, displayList, updateList
        this.scale = 1;
        this.growth = 100
        this.isInvincible = false;

        this.purgeSound = scene.sound.add('sfx_purge');
    }

    update() {
        /*if(keyUp.isDown){
            this.y -= 10;
        }

        if(keyDown.isDown){
            this.y += 10;
        }*/

        if(keyLeft.isDown){
            this.x -= 10;
        }

        if(keyRight.isDown){
            this.x += 10;
        }

        if(Phaser.Input.Keyboard.JustDown(keySpace)){
            this.grow();
        }
    }

    getGrowth(){
        return this.growth;
    }

    grow(){
        if(this.growth <= 990){
            this.growth += 10;
            this.scale += 0.1;
            this.setScale(this.scale);
            game.global.timeDilation -= 0.1;
            console.log(game.global.timeDilation);
        }
    }

    shrink(){
        this.purgeSound.play();
        this.limit -= 10;
        this.scale -= 0.1;
        this.setScale(this.scale);
    }
}