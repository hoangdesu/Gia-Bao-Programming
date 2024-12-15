function main() {
  console.log("this function is within main");

  console.log("2nd log from main");
}

// main()

// setTimeout(() => {
//     console.log('planting bomb');
// }, 2000);

// console.log('kaboom');

// Promise

const waitFor = () => {
    return new Promise(resolve => {
        setTimeout(resolve, 1000)
    });
}

waitFor().then(() => {
    console.log('kaboom')
})

// const callback = () => console.log('hey!')

// setTimeout(callback, 1000);

// setInterval(() => {
//     console.log('hi!!');
// }, 500);

// foobar
// fizzbuzz

// foo()

// bar()

// foobar()

const myPromise = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)

  let resolved = true;

  if (resolved) {
    myResolve(); // when successful
  } else {
    myReject(); // when error
  }
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function (value) {
    console.log("promise has been resolved successfully!");
  },
  function (error) {
    console.log("promise has failed to resolve (rejected)");
  }
);
