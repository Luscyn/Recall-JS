// Arrays

//mutable vs immutable

// var arr = [1,2,3, true];
// const arr2 = new Array(5); // Empty array

// console.log(arr2);
// console.log(arr2[3]); // undefined

// console.log(arr[2]);

// const arr3 = Array.from("Hello");

// console.log(arr3);
// arr3[1] = "a";
// console.log(arr3);

// console.log(`Last Letter: ${arr3[arr3.length-1]}`);

// arr3[arr3.length+5] = "Hello";
// console.log(arr3);

// console.log(arr3.indexOf("o"));
// console.log(arr3.lastIndexOf("l"));


// arr3.push(5); // Adds element at top
// console.log(arr3);

// arr3.pop(); // Removes last element
// console.log(arr3);

// const arr4 = [2,4]; // Adds element at the beginning of array
// arr.unshift(1);
// console.log(arr4)

// const arr5= [4,6]; // Removes first element
// arr.shift();
// console.log(arr5)



// const ar1 = [1,2];
// const ar2 = [3,4]
// const result = ar1.concat(ar2); // Concatenates both
// console.log(result);

// // Splice
// // arr.splice(Position, deletecount, insert new numbers)

// var arry = [10,20,30,40];
// const removed = arry.splice(1,3);
// console.log(arry) //10
// console.log(removed);

// arry.splice(0,1,1,2,3); //start 0, remove 1 item, then add 1 2 3
// console.log(arry); // 1,2,3

// //Slice - returns new array, doesnt change original array
// // array.slice(startIndex, endIndex)
// // note: end index is not included

// arr = [10, 20, 30, 40, 50];
// var part = arr.slice(1,3) // 20,30
// console.log(arr);
// console.log(part);

arr = Array.from("Hello");
const str = arr.join('|');
console.log(str)

// Array Destructing and Spread

const x = [1,2, 3, 4];
const y = [...x]; // to copy an array, , instead of referencing y = x

y.push("hello")
console.log(x,y);
