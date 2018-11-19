let movboss = "";
let number = 0;
let gameOver;
class boss{
    constructor(scene){
        gameOver = false;
        this.scene = scene;
        this.boss;
        this.distancia = {x:{},x2:{}};
        number = 0;
        this.physics = scene.physics;
        this.add = scene.add;
        this.anims = scene.anims;
    }
    createBoss(x,y,direcao){
        this.boss = this.physics.add.image(x, y, 'boss');
        if(direcao=="esq"){
            movboss  = "esq";
            this.distancia.x = x - 100
            this.distancia.x2 = x;
        }else{
            movboss  = "dir";
            this.distancia.x = x;
            this.distancia.x2 = x + 100;
        }
        // console.log(this.boss);
        this.boss.setBounce(2,0);
    }
    dano(player,boss,scene){
        gameOver = true;
    }
    update(boss,gameOver2){
    
            let x = boss.x;
            // console.log(x);
            if(movboss=="esq"){
                boss.setVelocityX(-20);
                if(x < this.distancia.x){
                    movboss="dir";
                }
            }else if(movboss=="dir"){
                boss.setVelocityX(20);
                if(x > this.distancia.x2){
                    movboss="esq";
                }
            }
        if(gameOver2){
            return gameOver2;
        }else{
            return gameOver;
        }
    }
}

export default boss;