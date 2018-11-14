// 36 x 36 tamanho do frame da cobra
let movcobra = "esq";
let number = 0;
let gameOver;
class Cobra{
    constructor(scene){
        gameOver = false;
        this.scene = scene;
        this.cobra;
        number = 0;
        this.physics = scene.physics;
        this.anims = scene.anims;
        this.create();
    }
    create(){
        this.cobra = this.physics.add.group();
    }
    createCobra(x,y){
        this.cobra.create(x, y, 'cobra');
        console.log(this.cobra);
        this.createAnims(number);
        number++;
    }
    createAnims(number){
        this.anims.create({
            key: 'cobra'+number,
            frames: this.anims.generateFrameNumbers('cobra', { start: 0, end : 1}),
            frameRate: 6,
            repeat: -1
        });
        console.log(this.cobra.children.entries[number]);
        this.cobra.children.entries[number].anims.play('cobra'+number, true);
    }
    dano(player,cobra,scene){
        gameOver = true;
    }
    update(cobra,gameOver2){
        if(movcobra=="esq"){
            this.cobra.setVelocityX(-200);
            if(x < 15){
                movcobra="dir";
            }
        }else if(movcobra=="dir"){
            this.cobra.setVelocityX(200);
            if(x > 2800){
                movcobra="esq";
            }
        }
        if(gameOver2){
            return gameOver2;
        }else{
            return gameOver;
        }
    }
}

export default Cobra;