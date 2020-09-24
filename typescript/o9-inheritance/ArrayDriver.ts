import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';

let myShape = new Shape(10,15);
let myCircle = new Circle(5,10,20);
let myRectangle = new Rectangle(16, 18, 20, 24);
 
// declare an array of shapes ..initially empty

let theShapes: Shape[] = [];
// add the diff. shapes obect to an Shape array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShapes of theShapes) {
    console.log(tempShapes.getInfo());
}