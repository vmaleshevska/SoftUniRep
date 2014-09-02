/**
 * Write a JavaScript function convertKWtoHP(value) to convert car’s kW into hp (horse power).
 * Write a JS program powerfulCars.js that converts a few sample values to hp
 * (see the examples below). The result should be printed on the console,
 * rounded up to the second sign after the decimal point. Run the program through Node.js.
 */
function convertHPtoKw(value){
    return Math.round(value /0.746 * 100)/100;
}

console.log(convertHPtoKw(75));
console.log(convertHPtoKw(150));
console.log(convertHPtoKw(1000));
