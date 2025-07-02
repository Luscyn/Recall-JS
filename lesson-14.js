// this and scopes

const person = {
    name: "Alice",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet();

const person2 = {
    name: "Alice",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`); // undefined/
    }

    // Arrow functions inherit this a the timing at which they are defined, not when they are called
};

person2.greet(); 
