var group;

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
    this.w;
    this.h;
}
init(){

    this.roundPixels = true;

}
preload ()
{
    this.load.image('bg', 'assets/background/fase 1 - 1.1.png');//700x288
    this.load.image('ground', 'assets/obj/plataforma.png');//700x60
    this.load.image('plat1','assets/obj/dog house.png');//faixada da loja azul
    this.load.image('plat3','assets/obj/omega shop.png');//faixada da loja verde
    this.load.image('plat2', 'assets/obj/plat2.png');//banquinho
    this.load.image('coin', 'assets/obj/coin.png');//22x22
    this.load.spritesheet('dude', 'assets/skins/dude.png', { frameWidth: 31, frameHeight: 36 });//32x48
    this.load.spritesheet('bat', 'assets/mobs/bat.png', {frameWidth: 31, frameHeight: 36});//32x48
    this.load.image('OBS7','assets/obj/OBS7.png');//escada
    this.load.image('OBS8','assets/obj/OBS8.png');//andaime
    this.load.image('limite', 'assets/obj/limite.png');//limite do mapa
}

create (){
    //this.w = this.cameras.main.width;
    //this.h = this.cameras.main.height;
    
    this.bg = this.add.image(0, 0, 'bg').setOrigin(0,0);

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(180, 278, 'ground');
    this.platforms.create(540, 278, 'ground');
    this.platforms.create(900, 278, 'ground');
    this.platforms.create(1260, 278, 'ground');
    this.platforms.create(574, 155, 'plat1');
    this.platforms.create(344, 258, 'plat2');
    this.platforms.create(1268, 155, 'plat3');
    this.platforms.create(1000, 197, 'OBS7');
    this.platforms.create(-1, 144 , 'limite');
    this.platforms.create(1401, 144, 'limite');
    

    //Player sets
    this.player = this.physics.add.sprite(100, 45, 'dude');
    
    //  Player physics properties. Give the little guy a slight bounce.
    this.player.setBounce(0.2);
    //this.player.setCollideWorldBounds(true);

    //  Our player animations, turning, walking left and walking right.
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
    
    this.cursors = this.input.keyboard.createCursorKeys();
    
    this.physics.add.collider(this.player, this.platforms);
    this.cameras.main.setBounds(0, 0, 1400, 288);
    this.cameras.main.startFollow(this.player);

    group = this.physics.add.staticGroup();
    group.create(896.5149120000165, 15, 'coin');
    group.create(540.7958079999963, 25, 'coin');
    this.physics.add.overlap(this.player, group, collectStar);
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
        console.log(this.player.x)
    }
}
}

function collectStar (player, grupo)
{
    grupo.destroy();
}

export default fase1;