var circle;
var colourChangers = [];
var obstacles = [];
var smallCircles = [];
var numOffScreen = 0;
var gameOver = false;
var highScore = 1
var music = true;

// Getting the highscore value from the browser local storage.
var highScore = localStorage.getItem("highScore"); 

var x;


function setup() {
  // Creating canvas and initializing variables
  createCanvas(400,600);
  circle = new Circle();

  // Keep background sound volume to be 0.1 (low)
  bgSound.amp(0.1)

  // Loop the background music
  if(music) { bgSound.loop() }
  // bgSound.loop();

  //Show the current HighScore
  document.getElementById("level").innerHTML = `Current High Score is ${highScore}, Try to beat it`

  for (var i = 0; i < 20; i++) {
    colourChangers.push(new ColourChanger(width / 2, height * (1 - 2 * i) / 4));
    obstacles.push(new CircleObstacle(width / 2, height * (1 - i) / 2));
  }
}

function musicToggle(){
  if(!gameOver){
  console.log('before',{music})
  if(music){ 
    bgSound.pause();
    document.getElementById("mute_button").innerHTML = "Un mute"
    music = false;
  }
  else{
    bgSound.play();
    document.getElementById("mute_button").innerHTML = "Mute"
    music = true;
  }
  console.log('after',{music})
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
      gameoverSound.play();

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
    document.getElementById("text").innerHTML = `Press Here or refresh to Restart the Game`
    bgSound.pause();
    
    // if the Score of the user is Greater than the Highscore
    if (level > highScore) {
      highScore = level
      document.getElementById("level").innerHTML = `Congrats you beat the High Score, Your score is ${level} and it is the new High Score is ${highScore}`
      localStorage.setItem("highScore", highScore);
    }

    // if the Score of the user is Less than the Highscore
    if (level < highScore) {
    document.getElementById("level").innerHTML = `Your score is ${level}, Highscore is  ${highScore}`
    }

    
    if (numOffScreen >= 15) {
      console.log("End")
      this.end();
    } // Even tho this line gives error but it will help stop the game
   

    for (var i = 0; i < smallCircles.length; i++) {
      smallCircles[i].show();
      smallCircles[i].update();

      if (smallCircles[i].offscreen()) {
        smallCircles.splice(i, 1);
        numOffScreen++;
        console.log(numOffScreen)
      }
    }
  }

  // keep showing the game if it is not Game Over
  if (!gameOver) {
    // Show the main circle
    circle.show();
    circle.update();
  }
}

// function to key bring ball up When screen is touched
function touchStarted() {
  circle.up();
  tapSound.play();

}

//Pressing any key bring ball up
window.addEventListener('keydown', function (e) {
  circle.up();
  tapSound.play();
}, false);

// function to refresh the page 
function refreshPage(){
  window.location.reload();
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
