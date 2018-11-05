class PlatForms{
    constructor(scene){
        this.physics = scene.physics;
        this.platforms;
    }
    create(){
        this.platforms = this.physics.add.staticGroup();
        let x = 180;
        for(let i = 0;i<8;i++){
            this.platforms.create(x, 278, 'ground');
            x+=360;
        }
    }
    criaObstaculos(x,y,nome){//coordenadas o o nome;
        this.platforms.create(x, y, nome);
    }
}
export default PlatForms;