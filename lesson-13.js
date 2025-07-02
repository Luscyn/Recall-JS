// Maps, Filter and Reduce

// Maps is used to transform ana rray to return new array

const numbers = [1,2,3,4,5];
// const doubled = numbers.map((num) => { return num*2}); // explicit return
const doubled = numbers.map(num => num*2); // implicit return


console.log(doubled.join(" "));

// filter - only return items that I need

const evens = numbers.filter(num => num % 2 === 0);
console.log(evens.join(" "))

/* reduce - combining all values into one value - great for averaging I guess?
 syntax

const result = array.reduce((accumulator, currentValue) => {
    return newAccumulator;
  }, initialValue);

*/


const result = numbers.reduce((accumulator, index) =>  accumulator += index);
console.log(result);