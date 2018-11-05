class Player{
    constructor(scene)  {
        this.scene = scene;
        this.anims = scene.anims;
        this.player;
        this.cursors = scene.input.keyboard.createCursorKeys();
        console.log(scene.platforms);
        this.platforms = scene.platforms;
    }
    create(){
        console.log("teste");
        this.player = this.scene.physics.add.sprite(100, 45, 'dude');

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end : 0}),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 1 } ],
            frameRate: 20
        });
        
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 2, end: 2}),
            frameRate: 10,
            repeat: -1
        });

        this.player.setBounce(0.2);

        //this.player.setCollideWorldBounds(true);

        this.scene.physics.add.collider(this.player, this.platforms);
    }
    
    update(coin){
        
        if (this.cursors.left.isDown){
            this.player.setVelocityX(-160);
            
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown){
            this.player.setVelocityX(160);
            
            this.player.anims.play('right', true);
        }
        else{
            this.player.setVelocityX(0);
            
            this.player.anims.play('turn');
        }
        if (this.cursors.up.isDown && this.player.body.touching.down && coin){
            this.player.setVelocityY(-/*300*/254);
        }
    }
}

export default Player;