// 19 x 14 tamanho do frame dp mocego
let SDMob = "desce";
let nunber = 0;
let gameOver;
class Morcego{
    constructor(scene){
        gameOver = false;
        this.scene = scene;
        this.player = scene.player.player;
        this.mocego;
        nunber = 0;
        this.physics = scene.physics;
        this.anims = scene.anims;
        this.create();
    }
    create(){
        this.mocego = this.physics.add.group();
    }
    createMorcego(x,y){
        this.mocego.create(x, y, 'morcego');
        console.log(this.mocego);
        this.createAnims(nunber);
        nunber++;
    }
    createAnims(nunber){
        this.anims.create({
            key: 'morcego'+nunber,
            frames: this.anims.generateFrameNumbers('morcego', { start: 0, end : 10}),
            frameRate: 10,
            repeat: -1
        });
        this.mocego.children.entries[nunber].anims.play('morcego'+nunber, true);
    }
    dano(player,mocego,scene){
        console.log("ola");
        // console.log(this.scene);
        // scene.scene.restart();
        gameOver = true;
    }
    update(mocego,gameOver2){
        let i2 = mocego.children.entries;
        // console.log(SDMob);
        for (let i = 0; i < i2.length; i++) {
            i2[i].setVelocityX(0);
            let y = i2[i].y;
            if(SDMob=="subi"){
                i2[i].setVelocityY(-100);
                if(y < 15){
                    SDMob="desce";
                }
                // console.log(this.mocego.y);
            }else if(SDMob=="desce"){
                i2[i].setVelocityY(100);
                // console.log(y);
                if(y > 250){
                    SDMob="subi";
                }
            }
        }
        if(gameOver2){
            return gameOver2;
        }else{
            return gameOver;
        }
    }
}

export default Morcego;