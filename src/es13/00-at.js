const array = ["one", "two", "three", "four", "five", "six"];

console.log(array[array.length -1]);

console.log(array.at(-1));

const nombres = ["Andres", "Valeria", "Ana", "Ramiro", "Richard"]

console.log(nombres.at(-1)) // "Richard"
console.log(nombres[-1]) // undefined
console.log(nombres.at(-3)) // "Ana"
console.log(nombres[nombres.length -1]) // "Richard"