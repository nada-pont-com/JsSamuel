import Player from './player.js';
import Coin from './coin.js';
import PlatForms from "./platForms.js";
class fase2 extends Phaser.Scene{
    
    constructor(){
        super({key: "fase2"});
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
        this.load.image('bg', 'assets/background/fase 2.png');//700x288
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
        this.platforms.create();
        let x;
        for (let i = 0; i < 2; i++) {
            x  = 1400*i;
            this.platforms.criaObstaculos(574+x, 155, 'plat1');
            this.platforms.criaObstaculos(344+x, 250, 'plat2');
            this.platforms.criaObstaculos(1268+x, 155, 'plat3');
            this.platforms.criaObstaculos(1000+x, 196, 'OBS7');
        }
        this.platforms.criaObstaculos(-1, 144 , 'limite');
        this.platforms.criaObstaculos(2801, 144, 'limite');

        this.player = new Player(this);
        this.player.create();
        this.coin = new Coin(this);
        this.coin.create();
        this.coin.geraMoedas(896.5149120000165,15);
        this.coin.geraMoedas(540.7958079999963,25);
        this.coin.geraMoedas(995.6822400000013,160);
        this.coin.geraMoedas(1240.7678079999814,100);

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

export default fase2;