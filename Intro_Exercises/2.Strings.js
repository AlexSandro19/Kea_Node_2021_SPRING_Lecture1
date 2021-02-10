// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

console.log(parseFloat(numberOne) + parseFloat(numberTwo));

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const solution = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);

console.log(solution.toFixed(2));//the value (which is a float), will be converted to String

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const average = (one + two + three) / 3;

console.log(average.toFixed(5));



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

//Strings are immutable, so every time we call a method, a new string will be created 
console.log(letters.charAt(2));//returns the caracter at specified index 
console.log(letters[2]);

console.log(letters.substr(2, 1));// returns a substring from a given string. First parameter - from which index to start, second - the length of the substring


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

console.log(fact.replace("j", "J"));// replace method replaces the first paramter with second parameter. It replaces only the first instance in the string 



// --------------------------------------



