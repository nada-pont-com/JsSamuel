class fase1 extends Phaser.Scene{

constructor(){
    super({key: "fase1"});
    this.player;
    this.bat;
    this.coin;
    this.bg;
    this.platforms;
    this.obs;
    this.cursors;
    this.score = 0;
    this.gameOver = false;
    this.scoreText;
}
init(){

    this.roundPixels = true;

}
preload ()
{
    this.load.image('bg', 'assets/background/fase 1 - 1.1.png');//700x288
    this.load.image('ground', 'assets/obj/plataforma.png');//700x60
    this.load.image('plat1','assets/obj/dog house.png');//faixada da loja azul
    this.load.image('plat2', 'assets/obj/plat2.png');//banquinho
    this.load.image('coin', 'assets/obj/coin.png');//22x22
    this.load.spritesheet('dude', 'assets/skins/dude.png', { frameWidth: 32, frameHeight: 48 });//32x48
    this.load.spritesheet('bat', 'assets/mobs/bat.png', {frameWidth: 32, frameHeight: 48});//32x48
    this.load.image('OBS7','assets/obj/OBS7.png');//escada
    this.load.image('OBS8','assets/obj/OBS8.png');//andaime
}

create (){
    this.bg = this.add.image(700, 144, 'bg');

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(180, 278, 'ground');
    this.platforms.create(540, 278, 'ground');
    this.platforms.create(574, 155, 'plat1');
    this.platforms.create(344, 258, 'plat2');

    //Player sets
    this.player = this.physics.add.sprite(100, 45, 'dude');
    
    //  Player physics properties. Give the little guy a slight bounce.
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });
    
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    
    this.cursors = this.input.keyboard.createCursorKeys();
    
    this.physics.add.collider(this.player, this.platforms);
        
    }

update(){
    if (this.gameOver){
        return;
    } 
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
    if (this.cursors.up.isDown && this.player.body.touching.down){
        this.player.setVelocityY(-/*300*/254);
    }
}
}
export default fase1;