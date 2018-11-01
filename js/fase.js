class fase1 extends Phaser.Scene{

    constructor(){
        super({key: "fase1"});
        this.player;
        this.stars;
        this.bombs;
        this.platforms;
        this.cursors;
        this.score = 0;
        this.gameOver = false;
        this.scoreText;
    }
    preload ()
    {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    }
    
    create ()
    {
        //  A simple background for our game
        this.add.image(400, 300, 'sky');
    
        //  The platforms group contains the ground and the 2 ledges we can jump on
        this.plataform = this.physics.add.staticGroup();
    
        //  Here we create the ground.
        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        this.plataform.create(700, 568, 'ground').setScale(2);
    
        //  Now let's create some ledges
        this.plataform.create(600, 400, 'ground');
        this.plataform.create(50, 250, 'ground');
        this.plataform.create(750, 220, 'ground');
    
        // The player and its settings
        this.player = this.physics.add.sprite(100, 450, 'dude');
    
        //  Player physics properties. Give the little guy a slight bounce.
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
    
        //  Our player animations, turning, walking left and walking right.
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
    
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });
    
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    
        //  Input Events
        this.cursors = this.input.keyboard.createCursorKeys();
    
        //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
        this.player = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });
    
        this.player.children.iterate(function (child) {
    
            //  Give each star a slightly different bounce
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    
        });
    
        this.bombs = this.physics.add.group();
    
        //  The score
        this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    
        //  Collide the player and the stars with the platforms
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.collider(this.bombs, this.platforms);
    
        //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
    
        this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);
    }
    
    update ()
    {
        if (this.gameOver)
        {
            return;
        }
    
        if (cursors.left.isDown)
        {
            this.player.setVelocityX(-160);
    
            this.player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            this.player.setVelocityX(160);
    
            this.player.anims.play('right', true);
        }
        else
        {
            this.player.setVelocityX(0);
    
            this.player.anims.play('turn');
        }
    
        if (cursors.up.isDown && player.body.touching.down)
        {
            this.player.setVelocityY(-330);
        }
    }
    
    collectStar (player, star)
    {
        star.disableBody(true, true);
    
        //  Add and update the score
        this.score += 10;
        this.scoreText.setText('Score: ' + score);
    
        if (stars.countActive(true) === 0)
        {
            //  A new batch of stars to collect
            this.player.children.iterate(function (child) {
    
                child.enableBody(true, child.x, 0, true, true);
    
            });
    
            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    
            var bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;
    
        }
    }
    
    hitBomb (player, bomb)
    {
        this.physics.pause();
    
        this.player.setTint(0xff0000);
    
        this.player.anims.play('turn');
    
        this.gameOver = true;
    }
    }
    // export default fase1;