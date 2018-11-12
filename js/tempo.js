let tempo,gameOver;
let seg = 0;
let min = 0;

class Tempo{
    constructor(scene){
        gameOver = false;
        this.add = scene.add;
        this.geraTempo();
    }
    geraTempo(){
        this.txtTempo = this.add.text(500,16,"",{fill:"#000",fontFamily:"Arial",fontSize:"25px"});
        tempo = setInterval(function(){
            if(seg == 59){
                seg = 0;
                min++;
            }
            if(min == 60){
                gameOver = true;
            }
            seg++;
        },1000);
    }
    paraTempo(){
        clearInterval(tempo);
    }
    moveTempo(player){
        let min2 = min,seg2 = seg;
        if(min<10){
            min2 = "0"+min2;
        }
        if(seg<10){
            seg2 = "0"+seg2;
        }
        this.txtTempo.setText("Tempo: "+min2+":"+seg2);
        if(player.x>350 && player.x<2450){
            this.txtTempo.x=parseInt(player.x+150);
        }
    }
    update(){
        return gameOver;
    }
}
export default Tempo;