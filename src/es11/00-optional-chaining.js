// Create an object "users" which has two properties: "gndx" and "ana".
const users = {
    gndx: {
        country: 'MX' // Within "gndx", there's a property called "country" that has a value of 'MX'.
    },
    ana: {
        country: 'CO'  // Within "ana", there's a property called "country" that has a value of 'CO'.
    }
}

// Use the optional chaining operator (?) to check if the "bebeloper" property exists within "users" object, 
// and then access the value of the "country" property inside it. 
console.log(users?.bebeloper?.country); // Since "bebeloper" doesn't exist in the "users" object, the output will be "undefined".