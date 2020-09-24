import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myCircle = new Circle(6,8,12);
let myRectangle = new Rectangle(3,2,6,5);
let myShapes: Shape[] = [];
myShapes.push(myCircle);
myShapes.push(myRectangle);
for(let tempShapes of myShapes) {
    console.log(tempShapes.getInfo());
    console.log(tempShapes.calculateArea());
    console.log();
}