class Point {
    private x: number;
    private y: number;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    dump() {
        console.log(this.x + ", " + this.y);
    }
}

var pt = new Point(5);
pt.dump();


