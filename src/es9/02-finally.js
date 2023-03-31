// Creates a function named `anotherFunction` using arrow function syntax
const anotherFunction = () => {
    
    // Returns a new Promise object 
    return new Promise((resolve, reject) =>{
        
        // If this is true (in this case it is), then the promise will be resolved with a value of 'Hey!!'
        if (true){
            resolve('Hey!!');
        } 
        
        // If not true, then the promise will be rejected with a reason of 'Whoooooops!'
        else {
            reject('Whoooooops!');
        }
    });
}

// Calls the 'anotherFunction' and waits for the promise to be resolved or rejected
anotherFunction()
    .then(response => console.log(response)) // If resolved, then 'Hey!!' gets logged to the Console
    .catch(err => console.log(err)) // If rejected, then 'Whoooooops!' gets logged to the Console
    .finally(() => console.log('Finally')); // Finally