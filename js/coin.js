var coin = true;
var pontos;
class Coin{
    constructor(scene){
        this.physics = scene.physics;
        this.coin;
        this.txt = scene.add;
        this.txtPonto;
        pontos = scene.pontos;
    }
    create(){
        this.coin = this.physics.add.staticGroup();         
        this.txtPonto = this.txt.text(16,16,"Pontos: "+pontos,{fill:"#000", fontFamily:"Arial", fontSize:"20px"});
    }
    update(player){
        this.txtPonto.setText("Pontos: "+pontos);
        if(player.x>350 && player.x<1050){
            this.txtPonto.x=player.x-334;
        }
        // console.log(this.txtPonto.x+"\n"+player.x)
    }
    geraMoedas(x,y){
        this.coin.create(x, y, 'coin');
    }
    coins(){
        if(coin!=null && coin!=true){
            return coin;
        }else{
            return true;
        }
    }

    coletaCoins(player,coins){
        pontos+=10;
        coin = false;
        coins.destroy();
        const time = setTimeout(function(){
            coin = true;
            clearInterval(time);
        },150);
    }
}

export default Coin;