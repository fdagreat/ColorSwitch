function Circle() {
var divColour;


	


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
	// if (this.color = "0,204,204"){
	// 	divColour = `#00cccc`
	// }
	// if (this.color = "255,255,51"){
	// 	divColour = `#ffff33`
	// }
	// if (this.color = "255,0,0"){
	// 	divColour = `#ff0000`
	// }
	// if (this.color = "153,0,153"){
	// 	divColour = `#990099`
	// }
	// document.getElementById("div").innerHTML= `${this.color}`


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

	this.up = function() {
		this.velocity = this.lift;
		this.velocity += this.lift * 0.7;
	}

	this.changeColour = function() {

		if (level >= 8) {
			this.radius = 9;
		}
		if (level >= 5) {
			this.radius = 8;
		}
		if (level <= 4) {
			this.radius = 6;
		}

		document.getElementById("text").innerHTML = `Score: ${level}`
		// incrementing the level
		level ++
		// incrementing the Obstracle speed to make it more faster
		OBSTACLE_VELOCITY = OBSTACLE_VELOCITY + 0.15

		var newColour = colours[(Math.floor(Math.random() * colours.length))];
		while (newColour == this.colour) {
			newColour = colours[(Math.floor(Math.random() * colours.length))];
			
		}
		this.colour = newColour;
<<<<<<< HEAD

// Code for changing button color according to circle color
		if (newColour== "0,204,204"){
			divColour = `#00cccc`
			document.getElementById("div").style.backgroundColor= `${divColour}`
		}
		if (newColour== "255,255,51"){
			divColour = `#ffff33`
			document.getElementById("div").style.backgroundColor= `${divColour}`
		}
		if (newColour== "255,0,0"){
			divColour = `#ff0000`
			document.getElementById("div").style.backgroundColor= `${divColour}`
		}
		if (newColour== "153,0,153"){
			divColour = `#990099`
			document.getElementById("div").style.backgroundColor= `${divColour}`
		}
=======
>>>>>>> parent of 73fe4b7... Touch Events can be detected on canvas and removed button

		if (newColour== "0,204,204"){
			buttonColour = `#00cccc`
			document.getElementById("jump").style.backgroundColor= `${buttonColour}`
		}
		if (newColour== "255,255,51"){
			buttonColour = `#ffff33`
			document.getElementById("jump").style.backgroundColor= `${buttonColour}`
		}
		if (newColour== "255,0,0"){
			buttonColour = `#ff0000`
			document.getElementById("jump").style.backgroundColor= `${buttonColour}`
		}
		if (newColour== "153,0,153"){
			buttonColour = `#990099`
			document.getElementById("jump").style.backgroundColor= `${buttonColour}`
		}

		//document.getElementById("jump").innerHTML= `#${newColour}`
	}
}