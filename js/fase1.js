import Player from './player.js';
import Coin from './coin.js';
import PlatForms from "./platForms.js";
import Tempo from "./tempo.js";
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
        this.pontos = 0;
    }
    init(){
        
        this.roundPixels = true;
        
    }
    preload (){
        this.load.image('bg', 'assets/background/fase 1.png');//700x288
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
        this.bg2 = this.add.image(1400, 0, 'bg').setOrigin(0,0);

        this.platforms = new PlatForms(this);

        this.platforms.create('ground');
        this.platforms.criaObstaculos(574, 155, 'plat1',2);
        this.platforms.criaObstaculos(344, 250, 'plat2',2);
        this.platforms.criaObstaculos(1268, 155, 'plat3',2);
        this.platforms.criaObstaculos(1000, 196, 'OBS7',2);
        this.platforms.criaObstaculos(-1, 144 , 'limite',1);
        this.platforms.criaObstaculos(2801, 144, 'limite',1);
        this.tempo = new Tempo(this);
        this.tempo.geraTempo();

        this.player = new Player(this);
        this.player.create();
        this.coin = new Coin(this);
        this.coin.create();
        this.coin.geraMoedas(896.5149120000165,15);
        this.coin.geraMoedas(540.7958079999963,25);
        this.coin.geraMoedas(995.6822400000013,160);
        this.coin.geraMoedas(1240.7678079999814,100);
        this.coin.geraMoedas(1940.5149120000165,15);
        this.coin.geraMoedas(2296.7958079999963,25);
        this.coin.geraMoedas(2395.6822400000013,160);
        this.coin.geraMoedas(2751.6822400000013,160); 
        this.coin.geraMoedas(2640.7678079999814,100); 
        this.coin.geraMoedas(1234.5149120000165,15);
        this.coin.geraMoedas(2800,25);
        this.coin.geraMoedas(193,180);
        this.coin.geraMoedas(322,10);
        this.coin.geraMoedas(444.5149120000165,190);
        this.coin.geraMoedas(777.7958079999963,25);
        this.coin.geraMoedas(369.6822400000013,160);
        this.coin.geraMoedas(246.7678079999814,100);
        this.coin.geraMoedas(1689,250);
        this.coin.geraMoedas(1432.7958079999963,25);
        this.coin.geraMoedas(640,160);
        this.coin.geraMoedas(2000.7678079999814,100);
        this.coin.geraMoedas(2200.7958079999963,25);
        this.input.on("pointerdown",function(pointer){
            console.log("x: "+this.player.player.x);
            console.log("y: "+this.player.player.y);
        },this);

        this.cameras.main.setBounds(0, 0, 2800, 288);
        this.cameras.main.startFollow(this.player.player);
        this.physics.add.overlap(this.player.player, this.coin.coin, this.coin.coletaCoins);
    }
    
    update(){
        this.coin.update(this.player.player);
        this.player.update(this.coin.coins());
        if (this.gameOver){
            return;
        }
    }
}

export default fase1;