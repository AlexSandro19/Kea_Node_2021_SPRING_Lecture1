// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 

console.log(letters[2]);


// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

console.log(friends.push("Jake", "Dave", "Mike")); //3 - push returns the length of array


// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

console.log(significantMathNumbers.indexOf(1729)); // returned index 3

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

diet.splice(2,0, "hamburger", "soda", "pizza");
//splice method has three parameters - start index (from which index to start), num_delete(how many values to delete after start index), values[] - one/many values to insert into array starting from start index 

//Checking the result 
// for (let value of diet){
//     console.log(value);
// }

// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

diet.pop();//will remove the last element of array and return it 

// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

let dinnerTray = diet.slice();
// slice method has start(first) and end(second) parameters. The start index is inclusive, the end index exclusive.
// When the end index is not given, slice will take all of the elements after the start index.
//slice method will copy the whole array if no parameters are specified 

console.log(dinnerTray.length);// result 2 -- array was copied correctly 


// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

let newStr = "";
for (let i = 1; i < lettersExpanded.length; i += 2){
    newStr += lettersExpanded[i];
}

console.log(newStr);

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

numStr = "Numbers above 6 or below 0: ";

for (let num of numbers){
    if (num < 0 || num > 6) {
        numStr += num + " "; 
    }else{
        discardedNumbers.push(num);
    }
}

console.log(numStr);

//Checking the result
// for (discarded of discardedNumbers){
//     console.log(discarded);
// }


// --------------------------------------


