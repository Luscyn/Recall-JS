// objects

// JSON - Javascript Object Notation

const obj = {
    name: "alice",
    age: 9,
    sayHello: function(){
        console.log("Hello");
    },
    career: {
        work: 'Software Engineer'
    }
}

obj.sayHello();
obj.newCol = [1,2];

// console.log(obj[newCol]);
console.log(obj.newCol);
console.log(obj.career.work);

// delete obj.career Delete an object

console.log(Object.values(obj));
console.log(Object.keys(obj).join(" "));

for (let keys in obj){
    console.log(keys);
}

// in looping through keys in object
// of for looping through an iterable like an array

const obj2 = {
    hairColor: 'black',
    arr: [1,2,3],
    age: 10 //overlaps, most recent is being displayed, overwrite
}

const obj3 = {...obj, ...obj2};

console.log(obj3);

obj3.career.info = "tech" // be careful of nested objects
console.log(obj, obj3);

// career is storing another object, but its being referenced to another object. So for object in obj3, we want to make a object for the career, info, it will also be duplicated and created in the obj which we copied

// destructuring

var {hairColor, age} = obj2;

console.log(hairColor, age);

// renaming in objects
const {hairColor: hair} = obj3;
console.log(hair, age);

// Adding properties using destructuring

const {arr, newval = "newval"} = obj2;

console.log(arr.join(" "), obj2);

// nested object destructing

const user = {
    name: "John",
    address: {
        city: "New York",
        zip: 10001
    }
}

const { address: {city, zip = 10002}} = user;

console.log(city, zip);