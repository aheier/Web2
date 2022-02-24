export class Point{

    constructor(private x:number, private y:number){
        this.x = x;
        this.y = y;
    }
    set X(x:number){this.x = x};
    set Y(y:number){this.y = y};

    draw() {
        console.log("X:" + this.x + " Y:" + this.y);
    }
}