class Menu{
    constructor(scene){
        this.add = scene.add;
        this.menu;
        this.input = scene.input;
        this.create();
    }
    create(){
        this.menu = this.add.image(670,35,'menu');
        this.menu.setInteractive();
        this.input.on("gameobjectdown",function(pointer,gameObject){
            
        })
    }   
}
export default Menu;