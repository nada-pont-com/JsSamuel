// 19 x 14 tamanho do frame dp mocego
let SDMob = "desce";
let nunber = 0;
class Morcego{
    constructor(scene){
        this.scene = scene;
        this.player = scene.player.player;
        this.mocego;
        this.physics = scene.physics;
        this.anims = scene.anims;
        this.create();
    }
    create(){
        this.mocego = this.physics.add.staticGroup();
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
    collider(){
        this.physics.add.overlap(this.player, this.mocego, this.dano);
    }
    dado(player,mocego){
        
    }
    update(mocego){
        let i2 = mocego.children.entries;
        // console.log(SDMob);
        for (let i = 0; i < i2.length; i++) {
            let y = i2[i].y;
            if(SDMob=="subi"){
                i2[i].y--;
                if(y < 15){
                    SDMob="desce";
                }
                // console.log(this.mocego.y);
            }else if(SDMob=="desce"){
                i2[i].y++;
                // console.log(y);
                if(y > 250){
                    SDMob="subi";
                }
            }
        }
    }
}

export default Morcego;