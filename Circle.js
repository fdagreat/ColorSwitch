function Circle() {
let divColour;
let container = document.getElementById("container");
let div = document.getElementById("div");
// Setting up variables for the Circle
	this.colour = colours[(Math.floor(Math.random() * colours.length))];
	this.radius = 5;
	this.y = height * 0.8;
	this.x = width / 2;

	this.gravity = 0.17;
	this.lift = -2;
	this.velocity = 0;

	this.show = function() {
		fill(this.colour[0], this.colour[1], this.colour[2]);
		ellipse(this.x, this.y, this.radius*2, this.radius * 2);
	}

//Updating the ball position when it goes up acording to gravity and velocity
	this.update = function() {
		this.velocity += this.gravity;
		this.y += this.velocity;

		if (this.velocity <= -3) {
			this.velocity = -3;
		}

		if (this.y + this.radius > height) {
			this.y = height - this.radius;
			this.velocity = 0;
		}
	}

	// Updating the velocity and acording to the gravity
	this.up = function() {
		this.velocity = this.lift;
		this.velocity += this.lift * 0.7;
	}

	// This to do when the color is changed 
	this.changeColour = function() {
		// Play sound when Color changes
		changecolorSound.play();

		// Updating the Object Velocity to change to rotation speed and size of the circle according to the level
		if (level >= 14) {
			this.radius = 9;
			OBSTACLE_VELOCITY = OBSTACLE_VELOCITY + 0.01
		}
		if (level >= 10) {
			this.radius = 8;
			OBSTACLE_VELOCITY = OBSTACLE_VELOCITY + 0.06
		}
		if (level >= 6) {
			this.radius = 7;
			OBSTACLE_VELOCITY = OBSTACLE_VELOCITY + 0.08
		}
		if (level <= 5) {
			this.radius = 6;
			OBSTACLE_VELOCITY = OBSTACLE_VELOCITY + 0.07
		}

		// Updating the the Score and showing ot the user
		document.getElementById("text").innerHTML = `Score: ${level}`

		// incrementing the level
		level ++

		// Updating the Color
		var newColour = colours[(Math.floor(Math.random() * colours.length))];
		while (newColour == this.colour) {
			newColour = colours[(Math.floor(Math.random() * colours.length))];
			
		}
		this.colour = newColour;


// Changing Top section color according to circle color
		if (newColour== "0,204,204"){
			divColour = `#00cccc`
			container.style.backgroundColor= `${divColour}`
			div.style.backgroundColor= `${divColour}`
		}
		if (newColour== "255,255,51"){
			divColour = `#ffff33`
			container.style.backgroundColor= `${divColour}`
			div.style.backgroundColor= `${divColour}`
		}
		if (newColour== "255,0,0"){
			divColour = `#ff0000`
			container.style.backgroundColor= `${divColour}`
			div.style.backgroundColor= `${divColour}`
		}
		if (newColour== "153,0,153"){
			divColour = `#990099`
			container.style.backgroundColor= `${divColour}`
			div.style.backgroundColor= `${divColour}`
		}

	}
}