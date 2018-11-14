class Menu{
    constructor(scene){
        console.log(scene);
        this.key = scene.sys.config.key;
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
            this.scene.pause(this.key);
            window.localStorage.setItem("fase",this.key);
            this.scene.launch("menu");
        },this);
    }   
}
export default Menu;