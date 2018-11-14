
class Menu{
    constructor(scene){

        this.scene = scene.scene;
        this.add = scene.add;
        this.menu;
        this.input = scene.input;
        this.create();
    }
    create(){
        this.menu = this.add.image(670,35,'pausa');
        this.menu.setInteractive();
        this.input.on("gameobjectdown",function(pointer,gameObject){
            this.scene.start("menu");
        })
    }   
}
class menu extends Phaser.Scene{
    create(){
        let play = this.add.image("play");
        let reset = this.add.image("reset");
        // let play = this.add.image("start");
        let menu = this.add.image("menu");
        this.input.on("gameobjectdown")
    }
}
export default menu;