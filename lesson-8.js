// while loops / do while

var count = 0;

// do while
do {
    console.log("run");
    count++;

    if (count == 5){ break};
} while (true);

while (count !== 5){
    console.log(run);
    count++;
}

// for loops

for (let i = 0; i > -10; i--){
    
    if(i == -5){
        console.log(`Skipping ${i}`);
        continue
    }

    console.log(i);
}

// for loops arrays

const arr = [1,2,3,4,5];

for  (let i of arr){
    console.log(i);
}
for  (let [i, value] of arr.entries()){
    console.log(i, value);
}