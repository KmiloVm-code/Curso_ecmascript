// This is a generator function that takes an array as parameter.
function* iterate(array) {
    // Iterate over the array passed as parameter and yield each value.
    for (let value of array) {
        yield value;
    }
}

// Declare a constant variable 'it' and assign the iterable object created calling the function 'iterate' with an array of strings.
const it = iterate(['Oscar', 'David', 'Ana', 'Ulises', 'Jennifer'])

// Log to the console the next value obtained when invoking the method 'next' on the iterator object 'it'.
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
// Trying to obtain the next value from an exhausted iterator will return { value: undefined, done: true}.
console.log(it.next().value);