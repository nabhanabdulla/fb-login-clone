// 1. Printing (or logging) output
console.log("Printed from Javascript file");

// 2. Data types - Number, String, Boolean
console.log("This is a String");
console.log(20);
console.log(true)
console.log(false);

// 3. Math operators
// Area = Length * Breadth
console.log(10 * 4);

// 4. Relational operators
console.log(10 === 4);

// 5. Variables
var length =  10;
var breadth = 4;
var area = length * breadth;

console.log(length);
console.log(breadth);
console.log(area);

if(length === breadth) {
    console.log("Square")
} else {
    console.log("Not square");
}

var length1 = 10;
var breadth1 = 10;
var area1 = length1 * breadth1;

if (length1 === breadth1) {
  console.log("Square");
} else {
  console.log("Not square");
}

// 6. Functions
function checkIfSquare(length, breadth) {
    if (length === breadth) {
      console.log("Square");
    } else {
      console.log("Not square");
    }
}

checkIfSquare(length, breadth)
checkIfSquare(length1, breadth1)

// 7. Form

function printArea() {
    var lengthInputElement = document.getElementById("length-input");
    var length = lengthInputElement.value;
    console.log(length);

    var breadthInputElement = document.getElementById("breadth-input");
    var breadth = breadthInputElement.value;
    console.log(breadth);

    var area = length * breadth;

    var message = "Area is: " + area;

    alert(message);
}