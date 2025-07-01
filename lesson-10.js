// Sets

const mySet = new Set([1,2,3]);

mySet.add(4)
mySet.delete(1);

console.log(mySet.has(3));

console.log(`Set size ${mySet.size}`);

for (const value of mySet){
    console.log(value);
}

mySet.clear();

const arr = Array.from(mySet); // converting to array orr
const arr2 = [...mySet] // copy to become array

console.log(typeof(arr2));