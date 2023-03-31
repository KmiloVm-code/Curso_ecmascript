const countries = {MX: 'Mexico', CO: 'Colombia', CL: 'Chile', PE: 'Peru'};
console.log(Object.entries(countries));

/*
The given code snippet contains the following operations:

A JavaScript object named countries is defined with its keys and values.
The Object.entries() method is called on the countries object which returns an array of [key, value] pairs for each enumerable property in the object.
This array of [key, value] pairs is then printed to the console using console.log().
To elaborate further on this code, the output of Object.entries(countries) will be an array of arrays where each nested array will contain a key-value pair from the countries object.

Here's what the output will look like:

[
  ["MX", "Mexico"],
  ["CO", "Colombia"],
  ["CL", "Chile"],
  ["PE", "Peru"]
]

Therefore, console.log(Object.entries(countries)) will print this array of arrays to the console.
*/