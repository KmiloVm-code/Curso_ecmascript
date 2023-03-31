// Arrays Destructure: It's a way of extracting values from arrays and assigning them to variables with a shorthand syntax.

let fruits = ['Apple', 'Banana']; // An array called fruits
let [a, b] = fruits; // Two variables 'a' and 'b' declared using destructuring

console.log(a, b); // Print the value of variable 'a' and 'b'
console.log(a, fruits[1]); // Prints the same as above

// Object Destructuring: Like array destructuring, it's a way of extracting values from an object in a shorthand syntax
let user = { username:'Oscar', age: 34}; // initialize an object
let { username, age } = user; // two new variables, 'username' and 'age' created and assigned the corresponding properties from the 'user' object via destructuring

console.log(username, age); // returned values for both variables
console.log(username, user.age); //defining the variable name and property name

// Spread Operator: Used to spread the values of an iterable object, such as an array or object, into a new textual (or similar construct) as separate arguments/values.
let person = {name: 'Oscar', age:28};
let country = {};

let data = { id: 1, ...person, country }; // Create a new object called 'data', takes all the properties of 'person' object and adding the new property of 'country', and also created 'id' key with a value of 1

console.log(data);

// Rest: The rest parameter syntax allows passing an indefinite number of arguments to function into an array.Its function is to replace the need for arguments Keyword and remove the limitations that come with it.

function sum(num, ...values) {
console.log(values); // returns an array of excess parameters
console.log(num + values[0]); // Adding the first element of the array to num
return num + values[0]; //returning sum of num and 1st index of the array
}

sum(1, 1, 2, 3); //Calling the function with multiple arguments