/**
 * Problem 8.	Cylinder Volume
 Write a JavaScript function calcCylinderVol(value) that accepts the following parameters:
 radius and the height of a straight circular cylinder.
 The function calculates the volume of the cylinder.
 Write JS program cylinderVol.js that calculates the volume of a few cylinders.
 The result should be printed on the console. Run the program through Node.js.
 */
function calcCylinderVol(radius, height){
    //V=πr2h
    var volume = Math.PI*radius*radius*height;
    return volume;
}
console.log(calcCylinderVol(2,4));
console.log(calcCylinderVol(5,8));
console.log(calcCylinderVol(12,3));