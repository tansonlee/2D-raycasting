class Sprite {
	constructor(rays) {
		this.pos = createVector(100, 200);
		this.rays = [];
		this.numRays = rays;
		for (let i = 0; i < TWO_PI; i += TWO_PI/this.numRays) {
			this.rays.push(new Ray(this.pos, i));
		}
	}

	show() {
		fill(0, 200, 0);
		ellipse(this.pos.x, this.pos.y, 16, 16);
	}

	// give an array of walls, draws a line from sprite to closest wall or a long one that extends
	shine(walls) {
		for (let ray of this.rays) {
			let recordPt;
			let recordDist = Infinity;
			for (let wall of walls) {
				let pnt = ray.collidePoint(wall);

				// if there is a collision point, set it to record if its closer then record where the point is
				if (pnt) {
					let d = p5.Vector.dist(this.pos, pnt);
					if (d < recordDist) {
						recordDist = d;
						recordPt = pnt;
					}
				}
			}

			// if there is a point, draw a red line. else, draw a grey line
			if (recordPt) {
				stroke(255,0,0, 220);
				strokeWeight(1);
				line(this.pos.x, this.pos.y, recordPt.x, recordPt.y);
			} else {
				stroke(51, 100);
				strokeWeight(1);
				push();
				translate(this.pos.x, this.pos.y);
				line(0, 0, ray.direct.x * (width+height), ray.direct.y * (width+height));
				pop();
			}
		}
	}

	// update where the sprite is
	updateLoc(x, y) {
		this.pos.set(x, y);
	}
}