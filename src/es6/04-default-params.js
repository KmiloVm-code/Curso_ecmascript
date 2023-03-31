function newUser(name, age, country) {
    let _name = name || 'Oscar';
    let _age = age || 34;
    let _country = country || 'CO';
    console.log(_name, _age, _country);
}

newUser();
newUser('Camilo', 27, 'CO');

//Default params ES6
function newAdmin(name = 'Oscar', age = 32, country = 'CL'){
    console.log(name, age, country);
}


newAdmin(); // Calling the function without parameters
newAdmin('Camilo', 27, 'CO'); // Calling the function with parameters