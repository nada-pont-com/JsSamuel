import Player from './player.js';
import Coin from './coin.js';
import Tempo from "./tempo.js";
import PlatForms from "./platForms.js";
 
// import Tempo from "./tempo.js";
class fase2 extends Phaser.Scene{

    constructor(){
        super({key: "fase2"});
        this.bat;
        this.bg;
        this.platforms;
        this.pontos = 0;
        this.obs;
        this.cursors;
        this.score = 0;
        this.gameOver = false;
        this.scoreText;
        this.coin;
        this.player;
        this.w;
        this.h;
    }
    init(){

        this.roundPixels = true;

    }
    preload (){
        this.load.image('bg', 'assets/background/fase 2.png');//700x288
        this.load.image('ground', 'assets/obj/plataforma.png');//700x60
        this.load.image('plat1','assets/obj/dog house.png');//faixada da loja azul
        this.load.image('plat3','assets/obj/omega shop.png');//faixada da loja verde
        this.load.image('plat2', 'assets/obj/plat2.png');//banquinho
        this.load.image('coin', 'assets/obj/coin.png');//22x22
        this.load.spritesheet('dude', 'assets/skins/dude.png', { frameWidth: 31, frameHeight: 36 });//32x48
        this.load.spritesheet('bat', 'assets/mobs/bat.png', {frameWidth: 31, frameHeight: 36});//32x48
        this.load.image('OBS7','assets/obj/OBS7.png');//escada
        this.load.image('limite', 'assets/obj/limite.png');//limite do mapa
    }

    create (){
        //this.w = this.cameras.main.width;
        //this.h = this.cameras.main.height;

        this.bg = this.add.image(0, 0, 'bg').setOrigin(0,0);
        this.bg2 = this.add.image(1400, 0, 'bg').setOrigin(0,0);

        this.platforms = new PlatForms(this);
        this.platforms.create();
        this.platforms.criaObstaculos(1268, 155, 'plat3',2);
        this.platforms.criaObstaculos(1000, 196, 'OBS7',2);
        this.platforms.criaObstaculos(-1, 144 , 'limite',1);
        this.platforms.criaObstaculos(2801, 144, 'limite',1);

        this.player = new Player(this);
        // this.player.create();
        this.coin = new Coin(this);
        // this.coin.create();
        this.coin = new Coin(this);
        //primeira
        this.coin.geraMoedas(200,250);
        this.coin.geraMoedas(230,250);
        //segunda
        this.coin.geraMoedas(300,250);
        this.coin.geraMoedas(330,250);
        this.coin.geraMoedas(300,215);
        this.coin.geraMoedas(330,215);
        //terceira
        this.coin.geraMoedas(400,180);
        this.coin.geraMoedas(430,180);
        this.coin.geraMoedas(400,215);
        this.coin.geraMoedas(430,215);
        this.coin.geraMoedas(400,250);
        this.coin.geraMoedas(430,250);
        //quarta
        this.coin.geraMoedas(500,145);
        this.coin.geraMoedas(530,145);
        this.coin.geraMoedas(500,180);
        this.coin.geraMoedas(530,180);
        this.coin.geraMoedas(500,215);
        this.coin.geraMoedas(530,215);
        this.coin.geraMoedas(500,250);
        this.coin.geraMoedas(530,250);
        //quinta
        this.coin.geraMoedas(600,180);
        this.coin.geraMoedas(630,180);
        this.coin.geraMoedas(600,215);
        this.coin.geraMoedas(630,215);
        this.coin.geraMoedas(600,250);
        this.coin.geraMoedas(630,250);
        //sexta
        this.coin.geraMoedas(700,215);
        this.coin.geraMoedas(730,215);
        this.coin.geraMoedas(700,250);
        this.coin.geraMoedas(730,250);
        //setima
        this.coin.geraMoedas(800,250);
        this.coin.geraMoedas(830,250);

        //primeira
        this.coin.geraMoedas(1200,250);
        this.coin.geraMoedas(1230,250);
        //segunda
        this.coin.geraMoedas(1300,250);
        this.coin.geraMoedas(1330,250);
        this.coin.geraMoedas(1300,215);
        this.coin.geraMoedas(1330,215);
        //terceira
        this.coin.geraMoedas(1400,180);
        this.coin.geraMoedas(1430,180);
        this.coin.geraMoedas(1400,215);
        this.coin.geraMoedas(1430,215);
        this.coin.geraMoedas(1400,250);
        this.coin.geraMoedas(1430,250);
        //quarta
        this.coin.geraMoedas(1500,145);
        this.coin.geraMoedas(1530,145);
        this.coin.geraMoedas(1500,180);
        this.coin.geraMoedas(1530,180);
        this.coin.geraMoedas(1500,215);
        this.coin.geraMoedas(1530,215);
        this.coin.geraMoedas(1500,250);
        this.coin.geraMoedas(1530,250);
        //quinta
        this.coin.geraMoedas(1600,180);
        this.coin.geraMoedas(1630,180);
        this.coin.geraMoedas(1600,215);
        this.coin.geraMoedas(1630,215);
        this.coin.geraMoedas(1600,250);
        this.coin.geraMoedas(1630,250);
        //sexta
        this.coin.geraMoedas(1700,215);
        this.coin.geraMoedas(1730,215);
        this.coin.geraMoedas(1700,250);
        this.coin.geraMoedas(1730,250);
        //setima
        this.coin.geraMoedas(1800,250);
        this.coin.geraMoedas(1830,250);
        //fim moedas
        this.coin.criaTexto();
        this.tempo = new Tempo(this);
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
        this.tempo.moveTempo(this.player.player);
        if (this.gameOver){
            return;
        }
    }
}

export default fase2;
