//Declarando
class User {

};

//Instancia de una clase
const newUser = new User();

/////////////////////////////////////////
class User2 {
    // metodos
    greeting(){
        return 'Hello';
    }
}

const kmilo = new User2();
console.log(kmilo.greeting());

const bebeloper = new User2();
console.log(bebeloper.greeting());

// Constructor

class User3 {
    // Constructor
    constructor() {
        console.log('Nuevo Usuario');
    }
    greeting(){
        return 'Hello';
    }
}

const david = new User3();

// this
class User4 {
    constructor(name){
        this.name = name;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new User4('Ana');
console.log(ana.greeting());

// setters and getters

class User5 {
    // Constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // Metodos
    speak(){
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }

    set uAge(a){
        this.age = a;
    }
}

const dev = new User5('David', 15);
console.log(dev.uAge);
console.log(dev.uAge = 20);