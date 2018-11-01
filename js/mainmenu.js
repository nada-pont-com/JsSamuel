import MenuFases from "./menufases.js";

class MainMenu extends Phaser.Scene {
    constructor() {
        super({key: "MainMenu"});
        this.menuNumber=-1;
    }

    preload() {
        this.load.image("button", "../assets/buttons/start.png");
        this.load.image("bg", "../assets/background/bg.png")
    }

    create() {
        var bg = this.add.image(350, 144, "bg");
        var start = this.add.image(350, 144, "button").setScale(4).setInteractive();
        start.on('pointerdown', function(){
            this.scene.start('MenuFases');
        }, this);
    }
}
export default MainMenu;
