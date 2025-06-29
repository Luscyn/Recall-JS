const prompt = require("prompt-sync")();

// Exercise by GPT - the basics

function calculator(){
    var x = prompt("Input first value: ");
    var y = prompt("Input second value: ");
    var op = prompt("Choose an operation (+, -, *, /, %, **): ");

    x = Number(x.trim());
    y = Number(y.trim());


    if (y == 0 && (op == '%' || op == '/') ){
        console.log(`You can't ${op} by 0`);
        return;
    }


    var result;

    if (!isNaN(x) && !isNaN(y)){
        switch (op){
            case '+':
                result = x+y;
                break;
            case '-':
                result = x-y;
                break;
            case '*':
                result = x*y;
                break;
            case '/':
                result = x/y;
                break;
            case '%':
                result = x%y;
                break;
            case '**':
                result = x**y;
                break;
            default:
                console.log("Bad operation")
                break;
        }
    } else {
        console.log(`Invalid input. "${x}" or "${y}" is not a valid number.`);
    }

    if (typeof result === "number" && !isNaN(result)) {
        console.log(`Result: ${x} ${op} = ${result}`);
        console.log(`Result type: ${typeof result}`);
      }      
}

calculator();
