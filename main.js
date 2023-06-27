function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	mario_game_over=loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	poseNet=ml5.poseNet(video,modelloded);
	poseNet.on('pose',ans);
}

function modelloded(){
	console.log("IIIIIII AM LOOOODDDEEEEDDDDDD");
}

function ans(result){
	if(result.length > 0){
		console.log(result);
		noseX=result[0].pose.nose.x;
		noseY=result[0].pose.nose.y;
	}
}

function draw() {
	game();
}