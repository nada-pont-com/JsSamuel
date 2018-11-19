let tempo,gameOver;
let seg = 0;
let min = 0;

class Tempo{
    constructor(scene){
        this.scene = scene;
        gameOver = false;
        this.seg = seg = 0;
        this.min = min = 0;
        this.add = scene.add;
        this.geraTempo();
    }
    geraTempo(){
        this.txtTempo = this.add.text(500,16,"",{fill:"#000",fontFamily:"Arial",fontSize:"25px"});
        tempo = this.scene.time.addEvent({ delay: 1000, callback:function(){
            if(seg == 59){
                seg = 0;
                min++;
            }
            if(min == 60){
                gameOver = true;
            }
            seg++;
        }, callbackScope: this, loop: true });;
    }
    paraTempo(){
        tempo.remove(false);
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
    update(gameOver2){
        if(gameOver2){
            return gameOver2;
        }else{
            return gameOver;
        }
    }
}
export default Tempo;