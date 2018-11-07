let tempo,gameOver;

class Tempo{
    constructor(scene){
        this.seg = 0;
        this.min = 0;
        gameOver = false;
        this.add = scene.add;
    }
    geraTempo(){
        this.txtTempo = this.add.text(666,16,"",{fill:"#000",fontFamily:"Arial",fontSize:"30px"})
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
    moveTempo(player){
        this.txtTempo.setText("Pontos: "+pontos);
        if(player.x>350 && player.x<2450){
            this.txtTempo.x=parseInt(player.x+334);
        }
    }
    update(){
        return gameOver;
    }
}
export default Tempo;