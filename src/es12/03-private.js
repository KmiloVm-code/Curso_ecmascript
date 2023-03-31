class User {
    // Constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // Metodos
    #speak(){
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    // getters and setters
    get #uAge() {
        return this.age;
    }

    set #uAge(a){
        this.age = a;
    }
}

const dev = new User('David', 15);
console.log(dev.uAge);
console.log(dev.uAge = 20);

///////////////////////////////////////////////////////////////////////

class Clase {
    #private(valor){
        console.log(valor)
    }
    
    public(valor){
        console.log(valor)
    }
    }

    const clase = new Clase()
  clase.public("Hola")  // 'Hola'
  clase.private("Hola") // TypeError: clase.private is not a function