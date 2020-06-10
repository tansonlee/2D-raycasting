let walls = [];
let particle;
let sprite;
let numWalls = 8;

let xoff = 0;
let yoff = 1000;

function setup() {
	createCanvas(800, 600);

	// create random walls
	for (let i = 0; i < numWalls; i++) {
		walls.push(
			new Boundary(
				random(width),
				random(height),
				random(width),
				random(height)
			)
		);
	}

	sprite = new Sprite(80);
}

function draw() {
	background(81);
	for (let wall of walls) {
		wall.show();
	}

	sprite.updateLoc(noise(xoff) * width, noise(yoff) * height);
	// sprite.updateLoc(mouseX, mouseY);
	sprite.shine(walls);
	sprite.show();
	xoff += 0.01;
	yoff += 0.01;
}
