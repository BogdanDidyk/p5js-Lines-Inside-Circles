class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Circle {
    constructor(center, radius, color) {
        this.center = center;
        this.radius = radius;
        this.color = color;
    }

    getPointLiesOnCircle(angle) {
        const x = this.center.x + this.radius * cos(angle);
        const y = this.center.y + this.radius * sin(angle);
        return new Point(x, y);
    }

    draw() {
        stroke(this.color);
        circle(this.center.x, this.center.y, this.radius * 2);
    }
}