// + - * / ** % -- ++ += -= *= /=

// ** is exponentiation

const x = 6
const y = '7';

// Adding number to a string converts it to a string
// String concatenation

const xy = Number(x+y);
const sumxy = xy + x

console.log(typeof(Number(x+y)));

console.log(sumxy) // 67+6 => 73

const z = true
console.log(x+z) // true = 1, so 7

const a = '123';
const b = 2;

console.log(typeof(a*b));

//Type coercion - automatically converting of type
// Implicit -> js converts automatically
// Explicit -> manually set by dev

// Addition dissimilar type -> concatenation

//Nan -> not a number. Trying when doing operation with string and a number aprt from +

var c = "string"
var d = 2;

console.log(c+d); //string2
console.log(c-d); //NaN

c = "12345"

console.log(Number(c)+d) //12347

c = "12345px"

console.log(parseInt(c)+d) //12347

//parseInt, parseFloat
// Number(), String()



