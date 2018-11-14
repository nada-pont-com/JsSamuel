class menuFase extends Phaser.Scene{
    constructor(){
        super({key:"menu"});
        this.play;
        this.reset;
        this.menu;
    }
    create(){
        this.play = this.add.image(320,144,"play").setInteractive();
        this.reset = this.add.image(360,144,"reset");
        // let play = this.add.image("start");
        let menu = this.add.image(390,144,"menu");
        this.input.on("gameobjectdown",function(pointer,gameObject){
            switch(gameObject){
                case play:
                    let fase = window.localStorage.getItem("fase");
                    this.scene.resume(fase);
                    this.destroy();
                break;
            }
        },this);
    }
    destroy(){

    }
}
export default menuFase;