var colours = [
	[0, 204, 204],
	[255, 255, 51],
	[255, 0, 0],
	[153, 0, 153]
];

var OBSTACLE_VELOCITY = 1;
var CIRCLE_BOUNDARY = 600 * 0.6;
var level = 1;
var highScore

if (highScore != null){
	var highScore = localStorage.getItem("highScore");
}


// if (level > 3) {
// 	OBSTACLE_VELOCITY = OBSTACLE_VELOCITY + 0.5;
// 	document.getElementById("text").innerHTML = `Nicee You are at level: ${level}.The Obstracle speed is increasing!!`
// 	console.log('level3 speed')
// 	console.log(OBSTACLE_VELOCITY)
// }
// if (level = 5) {
// 	OBSTACLE_VELOCITY = OBSTACLE_VELOCITY + 1;
// 	document.getElementById("text").innerHTML = `Nicee You are at level: ${level}.The Obstracle speed is increasing!!`
// 	console.log('level5 speed')
// 	console.log(OBSTACLE_VELOCITY)
// }
