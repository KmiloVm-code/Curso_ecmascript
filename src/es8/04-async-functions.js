// A function `fnAsync` is declared which returns a promise that resolves after 3 seconds with the message 'Async!!' when true, 
// and rejects an error otherwise

const fnAsync = ()  => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!'), 3000)
            : reject(new Error('Error!'));
    })
}

// An asynchronous function `anotherFn` is declared using the `async` keyword. It waits for the promise returned from `fnAsync`
// to be resolved, assigns the resolved value to the variable `something`, logs `something` to the console and finally, logs 
// the string 'Hello!' to the console. 

const anotherFn = async () => {
    const something =  await fnAsync();
    console.log(something);
    console.log('Hello!');
}

// The strings 'Before' and 'After' are logged to the console respectively on either side of a call to `anotherFn`.

console.log('Before');
anotherFn();
console.log('After');