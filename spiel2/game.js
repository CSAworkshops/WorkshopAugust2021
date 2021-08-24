var config  = {
	type:Phaser.Auto,
	width:800,
	height:600,
	physics:{
		default: 'arcade',
		arcade:{
	}
	},
	scene:{
		//Lade funktion ,erstellen des Spiels, update des Spiels
		preload:preload,
		create:create,
		update:update
	
		
		
		
	}
};

	
	let variable = 20

	var game = new Phaser.Game(config)
	
	function preload(){
		this.load.image("robot","assets/robot.jpg")
		this.load.image("box","assets/box.png")	
	}

	function create(){
	let player = this.physics.add.sprite(100,450,'robot')
	player.setBounce(0.2)
	player.setScale(0.2)
	let platforms =   this.physics.add.staticGroup();
	for (let i = 0; i < 50;i++) {
	let x = i * 80
	let gamebackground = platforms.create(x,568, 'box')
	gamebackground.setScale(1)
	gamebackground.refreshBody()
	}
	}

	function update(){
	}


