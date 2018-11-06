let tempo,gameOver;

class Tempo{
    constructor(scene){
        this.seg = 0;
        this.min = 0;
        gameOver = false;
        this.add = scene.add;
    }
    geraTempo(){
        this.add.text(666,16,"",{fill:"#000",fontFamily:"Arial",fontSize:"30px"})
        tempo = setInterval(function(){
            if(this.seg == 59){
                this.seg = 0;
                this.min++;
            }
            if(this.min == 60){
                gameOver = true;
            }
            this.seg++;
        },1000);
    }
    paraTempo(){
        clearInterval(tempo);
    }
    update(){
        return gameOver;
    }
}
export default Tempo;