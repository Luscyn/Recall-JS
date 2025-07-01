// const prompt = require("prompt-sync")();

// // Exercise by GPT - the basics

// function calculator(){
//     var x = prompt("Input first value: ");
//     var y = prompt("Input second value: ");
//     var op = prompt("Choose an operation (+, -, *, /, %, **): ");

//     x = Number(x.trim());
//     y = Number(y.trim());


//     if (y == 0 && (op == '%' || op == '/') ){
//         console.log(`You can't ${op} by 0`);
//         return;
//     }


//     var result;

//     if (!isNaN(x) && !isNaN(y)){
//         switch (op){
//             case '+':
//                 result = x+y;
//                 break;
//             case '-':
//                 result = x-y;
//                 break;
//             case '*':
//                 result = x*y;
//                 break;
//             case '/':
//                 result = x/y;
//                 break;
//             case '%':
//                 result = x%y;
//                 break;
//             case '**':
//                 result = x**y;
//                 break;
//             default:
//                 console.log("Bad operation")
//                 break;
//         }
//     } else {
//         console.log(`Invalid input. "${x}" or "${y}" is not a valid number.`);
//     }

//     if (typeof result === "number" && !isNaN(result)) {
//         console.log(`Result: ${x} ${op} = ${result}`);
//         console.log(`Result type: ${typeof result}`);
//       }      
// }

// calculator();

// Practice Again

const prompt = require("prompt-sync")();

function calculator(){

    var a = prompt("Enter first number: ");
    var b = prompt("Enter second number: ");
    var op = prompt("Enter operation: ");

    var a = Number(a);
    var b = Number(b);
    var result;

    if (!isNaN(a) && !isNaN(b)){
        switch (op){
            case "+":
                result = a+b;
                break;
            case "-":
                result = a-b;
                break;
            case "*":
                result = a*b;
                break;
            case "/":
                result = a/b;
                break;
            case "**":
                result = a**b;
                break;
            case "%":
                result = a%b;
                break;
            default:
                console.log("Invalid operator")
                return;
        }
    } else {
        console.log("Both input must be numbers!");
        return;
    }

    console.log(`Operation: ${a} ${op} ${b} = ${result}`);


}

calculator();
