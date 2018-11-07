import fase1 from "./fase1.js";

class MenuFases extends Phaser.Scene {
    constructor(){
        super({key: "MenuFases"});
    }

    preload(){
        this.load.image("f1", "../assets/buttons/f1.png");
        this.load.image("f2", "../assets/buttons/f2.png");
        this.load.image("f3", "../assets/buttons/f3.png");
        this.load.image("f4", "../assets/buttons/f4.png");
        this.load.image("f5", "../assets/buttons/f5.png");
        this.load.image("f6", "../assets/buttons/f6.png");
        // this.load.image("bg", "../assets/background/menufases.png");
    }
    create(){
        var bg = this.add.image(350, 144, "bg");
        var f1 = this.add.image(52.6, 144, "f1").setInteractive();
        f1.on('pointerdown', function(){
            this.scene.start('fase1');
        }, this);
        var f2 = this.add.image(169.2, 144, "f2").setInteractive();
        f2.on('pointerdown', function(){
            this.scene.start('fase2');
        }, this);
        var f3 = this.add.image(285.8, 144, "f3").setInteractive();
        f3.on('pointerdown', function()){
          this.scene.start('fase3');
        }, this);
        var f4 = this.add.image(79.4, 144, "f4").setInteractive();
        f4.on('pointerdown', function()){
          this.scene.start('fase4');
        }, this);
        var f5 = this.add.image(135,6, 144, "f5").setInteractive();
        f5.on('pointerdown',vfunction()){
          this.scene.start('fase5');
        }, this);  
        // var f4 = this.add.image(0, 144, "f4").setInteractive();
        // var f5 = this.add.image(0, 144, "f5").setInteractive();
        // var f6 = this.add.image(0, 144, "f6").setInteractive();
    }
}
export default MenuFases;
