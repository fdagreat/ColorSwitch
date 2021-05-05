var colours = [
	[0, 204, 204],
	[255, 255, 51],
	[255, 0, 0],
	[153, 0, 153]
];

var OBSTACLE_VELOCITY = 1;
var CIRCLE_BOUNDARY = 600 * 0.6;
var level = 1;

let mySound;
function preload() {
  soundFormats('wav',);
	startSound = loadSound('sounds/gamestart.wav');
	changecolorSound = loadSound('sounds/changecolor.wav');
	gameoverSound = loadSound('sounds/gameover.wav');
	colorSound = loadSound('sounds/changecolor.wav');
	tapSound = loadSound('sounds/tap.wav');
 // bgsound = loadSound('sounds/bgsound.mp3');
}