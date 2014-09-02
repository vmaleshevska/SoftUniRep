/**
 * Problem 9.	Tree or House
 Write a JavaScript function treeHouseCompare(value) that accepts the following parameters:
 integers a and b. The function compares the area of the house and the area of the tree
 (Figure 1) and returns the name of the figure with bigger area (house or tree)
 and the value of the area. Write JS program treehouse.js that compares a few houses and trees.
 The result should be printed on the console. Run the program through Node.js
 */
function treeHouseCompare() {
    var houseArea = Math.pow(arguments[0], 2) + (arguments[0] * ((arguments[0] * (2/3))) / 2);
    var treeArea = (arguments[1] * (arguments[1] * (1 / 3))) + Math.PI * Math.pow(arguments[1] * (2 / 3), 2);

    if (houseArea > treeArea) {
        console.log("house/" + houseArea.toFixed(2));
    }
    else if (treeArea > houseArea) {
        console.log("tree/" + treeArea.toFixed(2));
    }
    else {
        console.log("Figures are equal!");
    }
}

treeHouseCompare(3, 2);
treeHouseCompare(3, 3);
treeHouseCompare(4, 5);