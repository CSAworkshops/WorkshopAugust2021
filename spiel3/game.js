var config = {
	type: Phaser.Auto,
	width: 800,
	height: 600,
	physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: false
        }
	},
	scene:{
		//Ladefunktion 
		preload: preload,
		create: create,
		update: update
		
	}
};
var cursors;
var game = new Phaser.Game(config)
var player;
var platforms;
function preload(){
	this.load.image("terrainTile6","assets/terrainTile6.png")
	this.load.image("chimneyLow","assets/chimneyLow.png")
	this.load.image("GameOver","assets/GameOver.png")
}
function create(){
	cursors = this.input.keyboard.createCursorKeys();
	player = this.physics.add.sprite(100, 350, 'terrainTile6');
	platforms = this.physics.add.staticGroup();
	this.physics.add.collider(player, platforms);
	//for (100){
		//platforms.create(100, 550, 'chimneyLow').setScale(2).refreshBody();
	//
	//platforms.create(100, 550, 'chimneyLow').setScale(2).refreshBody();
	createstones()
}
var _platforms = []
var plattformx = 230
function createstones(){
	
	for (let schritt = 0; schritt < 10; schritt++) {
		createStone()
	}
	
}

function createStone(){
if (Phaser.Math.RND.between(0,10)<8) {
			var plattform = platforms.create(-100+plattformx, 550, 'chimneyLow')
			plattform.setScale(2).refreshBody();
			plattformx = plattformx + 130
			_platforms.push(plattform)
		}else{
			plattformx = plattformx + 200
		}	
}

var isGameOver = false;
function update(){
	createStone()
		
	for(let i = 0; i < _platforms.length; i++){
		_platforms[i].x -= 10;
		_platforms[i].refreshBody();
	}
	if (player.y > config.height && !isGameOver){
		let gameover =this.add.image(360,300, "GameOver")
		gameover.setScale(3)
		isGameOver = true;
	}
	player.setBounce(0.2);
	if (cursors.up.isDown && player.body.touching.down){
    player.setVelocityY(-330);
	}
	}
	
//player.setVelocityX(10)
//if (cursors.up.isDown && player.body.touching.down)
//{
  //  player.setVelocityY(-330);
//}


//player.setBounce(0.2);
//player.setCollideWorldBounds(true);

//this.physics.add.collider(player, platforms);	

