// map

const myMap = new Map();

const numberMap = new Map([[1, 'one'], [2, 'two']]);

myMap.set(4, 'four');

console.log(numberMap);
console.log(myMap);
myMap.delete(4);
myMap.set(1,"10");
console.log(myMap.get(1));

console.log(myMap.size);

for (const [key, value] of myMap){
    console.log(key, value);
}

for (const key of myMap.keys()){
    console.log(key);
}

for (const values of myMap.values()){
    console.log(values);
}

myMap.clear();
const arr = Array.from(myMap) // converts array to maps