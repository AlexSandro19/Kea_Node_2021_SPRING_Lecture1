// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constants

const firstName = "Anders";
const lastName = "Latif";

// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

// concatenation
console.log("My first name is " + firstName + " and my last name is " + lastName);

// string literal
console.log(`My first name is ${firstName} and my last name is ${lastName}`);

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2020";
const number = 1;

// Add the year plus the number
// The result should be 2021
// You cannot touch line 1 or 2

//Difference between parseInt and Number : https://iaforek.medium.com/difference-between-number-and-parseint-in-javascript-77f3ae9b735b

console.log(parseInt(year) + number);
//Or create a variable first 
const thisYear = parseInt(year) + number;
console.log(thisYear);

console.log(Number(year) + number);
//Or create a variable first 
const currentYear = Number(year) + number;
console.log(currentYear);

// + before the string will convert it to number 
console.log(+ year + number);



// --------------------------------------
