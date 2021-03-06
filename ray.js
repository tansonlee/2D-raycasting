class Ray {
	constructor(pos, angle) {
		this.pos = pos;
		this.direct = p5.Vector.fromAngle(angle);
	}

	collidePoint(wall) {
		const x1 = wall.p1.x;
		const y1 = wall.p1.y;
		const x2 = wall.p2.x;
		const y2 = wall.p2.y;

		const x3 = this.pos.x;
		const y3 = this.pos.y;
		const x4 = this.pos.x + this.direct.x;
		const y4 = this.pos.y + this.direct.y;

		const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

		if (den == 0) {
			return;
		}

		const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
		const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

		if (t > 0 && t < 1 && u > 0) {
			const pt = createVector();
			pt.x = x1 + t * (x2 - x1);
			pt.y = y1 + t * (y2 - y1);
			return pt;
		}

		return;
	}
}

const wall = {
	point1: { x, y },
	point2: { x, y },
};

const ray = {
	position: { x, y },
	direction: { x, y },
};

const intersection = (ray, wall) => {
	const x1 = wall.point1.x;
	const y1 = wall.point1.y;
	const x2 = wall.point2.x;
	const y2 = wall.point2.y;

	const x3 = ray.position.x;
	const y3 = ray.position.y;
	const x4 = ray.position.x + ray.direction.x;
	const y4 = ray.position.y + ray.direction.y;

	const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

	if (denominator == 0) {
		// lines are parallel
		return;
	}

	const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
	const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denominator;

	if (t > 0 && t < 1 && u > 0) {
		const intersectionPoint = {};
		intersectionPoint[x] = x1 + t * (x2 - x1);
		intersectionPoint[y] = y1 + t * (y2 - y1);
		return intersectionPoint;
	} else {
		// no intersection
		return;
	}
};
