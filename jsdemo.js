// This is a JS comment
// 1. Printing (or logging) output
// console.log("Hi there");

// String - added inside ""
// console.log("This is a string");

// Number
// console.log(20);
// console.log(10000);

// Boolean - true/false
// console.log(true);
// console.log(false);

// Math operators

// console.log(10 + 20); // Addition
// console.log(50 - 10); // Subtraction
// console.log(10 * 5); // Multiplication

// console.log(10 * 4)

// console.log(10 > 15)
// console.log(10 === 15)
// console.log(15 === 15)

// console.log(10 * 4)

// length - 10
// breadth - 5
// console.log(10 === 5)

// length - 10
// breadth - 10
// console.log(10 === 10)

var length = 10;
var breadth = 10;

var area = length * breadth;

var isSquare = length === breadth; // true or false

// if (isSquare) {
//   // Runs if condition is true
//   console.log("Square");
// } else {
//   // Runs if condition is false
//   console.log("Not square");
// }

var length1 = 20;
var breadth1 = 5;

var isSquare1 = length1 === breadth1; // true or false

// if (isSquare1) {
//   // Runs if condition is true
//   console.log("Square");
// } else {
//   // Runs if condition is false
//   console.log("Not square");
// }

// Syntax for creating  a function
// length and breadth here are function "arguments"
function checkIfSquare(l, b) {
  var isSquare = l === b; // true or false
  if (isSquare) {
    // Runs if condition is true
    console.log("Square");
  } else {
    // Runs if condition is false
    console.log("Not square");
  }
}

// calling a function or running lines of code in a function
// checkIfSquare(length, breadth); 
// checkIfSquare(length1, breadth1);

// String length
var text = "This is a piece of text"
var textLength = text.length;
console.log(textLength);

var lengthInputElement = document.getElementById("length-input");
console.log(lengthInputElement)

var typedLength = lengthInputElement.value;
console.log(typedLength);
console.log(parseInt(typedLength));


function printArea() {
    var lengthInputElement = document.getElementById("length-input");
    var breadthInputElement = document.getElementById("breadth-input");

    // Value read will be a string
    var length = lengthInputElement.value;
    var breadth = breadthInputElement.value;

    // Convert string to Number
    var lengthNumber = parseInt(length);
    var breadthNumber = parseInt(breadth);


    alert(lengthNumber);
    alert(breadthNumber);
}