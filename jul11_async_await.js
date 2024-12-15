// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "Promise 1 resolved");
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "Promise 2 resolved");
// });

const getPromise1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Promise 1 resolved");
  });
};

const getPromise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Promise 2 resolved");
  });
};

// async function apiCalls() {

// }

const apiCalls = async () => {
  //   const p1 = await getPromise1();
  //   console.log(p1);

  //   const p2 = await getPromise2();
  //   console.log(p2);

  try {
    const values = await Promise.all([getPromise1(), getPromise2()]);
    console.log(values);
  } catch (err) {
    console.error('error:', err);
  }
};

apiCalls();

async function fetchData() {
    try {
        const res = await fetch('api endpoint');
        const data = await res.json();

    } catch (err) {
        console.error('api call failed', err);
    }
}

fetch('api endpoint')
    .then(res => res.json())
    .then(data => {
        // data...
    })