const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Promise 1 resolved");
});

promise1.then(data => {
    console.log(data);
})

promise2.then(data => {
    console.log(data);
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Promise 2 resolved");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "Promised 3 rejected");
}).catch((err) => console.error(err));



Promise.all([promise1, promise2])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => console.error(err));

Promise.any([promise1, promise2]).then((value) => console.log(value));

const promise4 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("big");
  } else {
    reject("small");
  }
});

promise4
  .then((val) => {
    console.log(val);
  })
  .catch((err) => console.error(err))
  .finally(() => {
    console.log("promise 4 done");
  });

const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, Math.random() * 100, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, Math.random() * 100, "Queen");
});

// When the faster promise settles
const winner = Promise.race([myPromise1, myPromise2]).then((x) => {
  console.log(x);
});

// console.log(winner);
