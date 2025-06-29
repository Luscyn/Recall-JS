// conditionals

let y = 5


if (!y){
    console.log('true');
} else {
    console.log('false');
}

// we can also do something like this

if (false) 
    console.log("hello");
else 
    console.log("lol");

console.log("outside loop");

// ternary operator

const cond = 2 > 3 ? "2 is greater than 3" : "2 isnt greater than 3";

console.log(cond);

// switch statements

const value = "asd";

switch (value) {
    case 3:
        console.log("3 is cool");
        break;
    case 4:
        console.log("4 is cool");
        break;
    default:
        console.log("any is cool");
        break;
}