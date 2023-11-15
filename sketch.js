let circles;
let minSize;

function setup() {
    createCanvas(500, 500);
    background("#1c1c1c");
    frameRate(10);
    angleMode(DEGREES);

    minSize = (width < height) ? width : height;
    circles = getDifferentCircles();
    setTimeout(() => noLoop(), random(1.5, 3.5) * 1000);
}

function draw() {
    circles.forEach(circle => {
        stroke(circle.color);
        const p1 = circle.getPointLiesOnCircle(random(361));
        const p2 = circle.getPointLiesOnCircle(random(361));
        line(p1.x, p1.y, p2.x, p2.y);
    });
}

function getRandomRGBA(alphaFrom = 0.7, alphaTo = 1) {
    const r = int(random(256));
    const g = int(random(256));
    const b = int(random(256));
    const alpha = random(alphaFrom, alphaTo);

    return `rgba(${r},${g},${b},${alpha})`;
}

function getRandomCircle(randomCircleOptions = {}) {
    const {
        centerXMin = 0,
        centerXMax = width,
        centerYMin = 0,
        centerYMax = height,
        radiusMin = minSize / 50,
        radiusMax = minSize / 10,
        colors = ["red", "green", "blue"]
    } = randomCircleOptions;

    return new Circle(
        new Point(
            random(centerXMin, centerXMax),
            random(centerYMin, centerYMax)
        ),
        random(radiusMin, radiusMax),
        random(colors)
    );
}

function getArrayOfLength(length) {
    return Array.from({length});
}

function createColors(count) {
    return getArrayOfLength(count).map(() => getRandomRGBA());
}

function createCircles(count, randomCircleOptions) {
    return getArrayOfLength(count).map(() => getRandomCircle(randomCircleOptions));
}

function getDifferentCircles() {
    const smallCirclesCount = random(20, 36);
    const mediumCirclesCount = random(8, 21);
    const bigCirclesCount = random(5, 9);
    const colors = createColors(random(2, 6));

    const smallCircles = createCircles(smallCirclesCount, {
        radiusMin: minSize / 100,
        radiusMax: minSize / 50,
        colors
    });

    const mediumCircles = createCircles(mediumCirclesCount, {
        radiusMin: minSize / 40,
        radiusMax: minSize / 20,
        colors
    });

    const bigCircles = createCircles(bigCirclesCount, {
        radiusMin: minSize / 15,
        radiusMax: minSize / 10,
        colors
    });

    return [...smallCircles, ...mediumCircles, ...bigCircles];
}