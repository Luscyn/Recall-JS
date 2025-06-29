// data types

// String '' "" ``;
// Boolean true false;
// number 1 2.0 3.2;
// undefined; Condition where an expression doesnt have correct value but its syntactically correct
// null; -> explicitly set something as nothing
// BigInt

// variables

var xz = "hello";
var helloWorld = "hello world"
helloWorld = "newly assigned"

// var = "function scoped" -> advanced

let x = 5;
x = 7
x += 1;

const VELOCITY = 34

// Block vs Function Scoped
// Block Scoped -> Let and Const

if (true){
    var y = 5
}

console.log(y);


// functions
function test(){
    console.log(y);
    // let y = 5;
    console.log(y);
}

test();