# 2D-raycasting

### A 2D simulation of raycasting.

Link to hosted project: [Ray Casting](https://tansonlee.github.io/2D-raycasting/)

**Raycasting:** An algorithm that is able to help render shapes where an intersection function can be found between the shape and a ray.
The sprite in this example moves using perlin noise.

<br>

<img src="assets/2D-raycasting.gif" width="400px">

An intersection function can be found between a line and a ray thus the raycasting algorithm can be used. This intersection function is found in the wikipedia page linked at the bottom.

```javascript
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

```

---

Applications for this project:

-   can be modified for ray marching
-   can be modified for 3D raycasting
-   can be used in games for:
    -   light and shaddow generation
    -   first person games for perspective generation


Sources: 

- https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
