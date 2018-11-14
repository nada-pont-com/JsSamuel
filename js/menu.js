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
export default Menu;