let tempo,gameOver;

class Tempo{
    constructor(scene){
        this.seg = 0;
        this.min = 0;
        gameOver = false;
        this.add = scene.add;
    }
    geraTempo(){

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