var circle;
var colourChangers = [];
var obstacles = [];
var smallCircles = [];
var numOffScreen = 0;
var gameOver = false;
var highScore = 1
var highScore = localStorage.getItem("highScore"); 

function setup() {
  // Creating canvas and initializing variables
  //createCanvas(displayWidth-500, displayHeight-250);
  createCanvas(400,600);
  circle = new Circle();
  document.getElementById("level").innerHTML = `Current High Score is ${highScore}, Try to beat it`

  for (var i = 0; i < 20; i++) {
    colourChangers.push(new ColourChanger(width / 2, height * (1 - 2 * i) / 4));
    obstacles.push(new CircleObstacle(width / 2, height * (1 - i) / 2));
  }
}

function draw() {
  background(32, 32, 32);

  // Update each colour changer and check for intersection
  for (var i = 0; i < colourChangers.length; i++) {
    obstacles[i].show();
    obstacles[i].update();
    colourChangers[i].show();
    colourChangers[i].update();

    // Get rid of the obstacle if offscreen
    if (obstacles[i].offscreen()) {
      obstacles.splice(i, 1);
    }

    // Check for intersection with circle
    if (obstacles[i].intersect() && !gameOver) {
      gameOver = true;
      // Populating array with small circles
      for (var i = 0; i < 15; i++) {
        smallCircles.push(new SmallCircle(circle.x, circle.y));
      }
      background(255);
      var j = 1;
      while (j < 100000) {
        j++;
      }
    } else if (colourChangers[i].intersect()) {
      colourChangers.splice(i, 1);
      circle.changeColour();
    }
  }

  // Intersection occured; explode ball
  if (gameOver) {
    document.getElementById("text").innerHTML = `Refresh the page to restart the game`
    
    
    if (level > highScore) {
      
      highScore = level
      document.getElementById("level").innerHTML = `Congrats you beat the High Score, Your score is ${level} and it is the new High Score is ${highScore}`
      localStorage.setItem("highScore", highScore);
    }

    if (level < highScore) {
    document.getElementById("level").innerHTML = `Your score is ${level}, Highscore is  ${highScore}`
    }
    if (numOffScreen >= 15) {
      this.end();
    }

    for (var i = 0; i < smallCircles.length; i++) {
      smallCircles[i].show();
      smallCircles[i].update();

      if (smallCircles[i].offscreen()) {
        smallCircles.splice(i, 1);
        numOffScreen++;
      }
    }
  }

  if (!gameOver) {
    // Show the main circle
    circle.show();
    circle.update();
  }
}
//Pressing any key bring ball up
window.addEventListener('keydown', function (e) {
  circle.up();
}, false);
function keyPressed() {
  if (x ==  1 ) {
    circle.up();
  }
}

// Screen flashes white for a second and ball explodes
function gameOverAnimation() {
  // Keep updating unless all the circles are offscreen
  while (numOffScreen < smallCircles.length) {
    for (var i = 0; i < smallCircles.length; i++) {
      smallCircles[i].show();
      smallCircles[i].update();

      if (smallCircles[i].offscreen()) {
        smallCircles.splice(1, i);
        numOffScreen++;
      }
    }
  }
}
