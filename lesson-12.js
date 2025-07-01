// Try Catch errors

try {
    riskyFunction();
} catch (error) {
    console.log(`An error occured: ${error.message}`)
} finally {
    console.log("Clean up code. This usually executes")
}

// throw new Error("this is not good!") // -> Custom error, for OOP

// Functions

function greet(name, age=undefined){
    console.log(`Hello ${name}. Your age is ${age}`);
}

greet("John", 12);
greet("Yohan");

// Function expression

const fexp = function(){
    console.log("lol");
}

//ES6. Arrow Functions

const fexp2 = (name) => console.log(`Hello ${name}`);

fexp2("John");
fexp2("Laura");
fexp2("Andres");


function addNums(...numbers){
    return [1,2];
}