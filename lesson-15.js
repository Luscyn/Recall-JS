// Promises

// 3 states - Pending. Fulfilled, Rejefected state
// Promise is an obect that represents eventual completion or failure of async op

const myPromise = new Promise((resolve, reject) => {
    // Asycnh
    if(false) {
        resolve("good"); //Fulfill
    } else {
        reject("bad"); //Reject
    }
})

// Promise is when you dont know how long it will take to complete
// wait for the promise to be no longer pending

myPromise.then((value) => {
    console.log(value)
}).catch((value) => {
    console.log(value)
}).finally(()=>{
    console.log("Finally");
})

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 1000, "foo"));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 5000, "bar"));

Promise.all([promise1, promise2, promise3])
.then((results) => {
    console.log(results);
})
.catch((error)=> {
    console.log(error)
});