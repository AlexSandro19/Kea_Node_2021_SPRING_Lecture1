// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message 
console.log(myObj.message);

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const newObj = {name: "Alex", age:21}

console.log(newObj.name);
console.log(newObj.age);
// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

// make a rule called isAllowed and let the value be true
stackOverflow.isAllowed = true;
console.log(stackOverflow.isAllowed);

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {"description": "The best song in the world."}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

console.log(thisSong.description);// check that it exists 
delete thisSong.description;
console.log(thisSong.description);// returns undefined - the property was deleted 

thisSong.about = "Just a tribute.";
console.log(thisSong.about);


// --------------------------------------


