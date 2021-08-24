var left=false;
var right=false;
var jump=false;
var config = {
	type: Phaser.AUTO,
	backgroundColor: "#87CEEB",
	//X
	width: 800,
	//Y
	height: 600,
	scene:{
		//Ladefunktion
		preload: preload,
		//Erstellen des Spiels
		create: create,
		//Update
		update: update
			},
			 physics:{ //Physics
        	default:'arcade', //Physicstyp
        	arcade:{debug:false} //Debug
					}
}
//Variablen
	//Keine Ahnung
	var game = new Phaser.Game(config);
	//Definiere Tasten
		var spaceBar
	//var a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.a);
	
//Vor create
function preload(){
	//Spielerbild
this.load.image("player", "assets/player.png");
	//Grundbild
this.load.image("ground", "assets/ground.png");
//I have no Idea what I'm doing
cursors = this.input.keyboard.createCursorKeys();
this.load.image("spike", "assets/spike.png");
}

var _player;

//Nach Preload
function create(){

	let spike=this.physics.add.sprite(config.width-10, 0,"spike");
	this.sp=spike;
	this.sp.setVelocityX(-300);
	//Fügt den Spieler als Sprite hinzu
 let player=this.physics.add.sprite(config.width/2,config.height*-0.95,"player");
 
		//Lässt den Spieler sich per this.pl ansteuern lassen
	this.pl=player;
	//Macht boing
		this.pl.setBounce(1);
		//Macht NOCH MEHR BOING
		this.sp.setBounce(1);
		//Lässt den Spieler nicht ausbrechen lassen
	this.pl.setCollideWorldBounds(true);
	this.sp.setCollideWorldBounds(true);
 //Fügt den Grund als Bild ein.
	//Setzt groundX und groundY auf die Hälfte des Spiels (definiert in der Config)
	 let groundX=config.width/2;
	 let groundY=config.height*.95;
	//this.add.image(config.width/2, 600, "ground");
	 	//Setzt den Grund (Von der Koordinate her) auf GroundX, GroundY
	 let ground=this.physics.add.sprite(groundX,groundY,"ground");
	 //Setzt die Höhe des Grundes auf die Höhe in der Config mal .95, also auf 95%
	player.setGravityY(250);
	spike.setGravityY(400);	
	ground.displayWidth=config.width;
	this.physics.add.collider(player, ground);
	this.physics.add.collider(spike, ground,);
	this.physics.add.collider(spike, player, GameOver);
	ground.setImmovable();
	

}

//Bei jedem Frame
function update(){
	if (cursors.left.isDown) //Wenn Links gedrückt wird
	{
		if (this.pl.angle>=-20) {
    this.pl.angle -= 1;
		}
	this.pl.setVelocityX(-160);
	}
else if (cursors.right.isDown) //Wenn Rechts gedrückt wird
	{
		if	(this.pl.angle<=20) {
    this.pl.angle += 1;
		}
	this.pl.setVelocityX(160);
	}
else {
	//Wenn nichts gedrückt wird
	this.pl.setVelocityX(0);
	}
			}
			
function GameOver() {
	console.log("Game Over");
}