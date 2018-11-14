
class menuFase extends Phaser.Scene{
    create(){
        let play = this.add.image("play");
        let reset = this.add.image("reset");
        // let play = this.add.image("start");
        let menu = this.add.image("menu");
        this.input.on("gameobjectdown")
    }
}
export default menuFase;