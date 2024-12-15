// let fade = null;
// async function fetchAgents() {
//     try {
//         const res = await fetch('https://valorant-api.com/v1/agentsz'); // 1
//         const data = await res.json(); // 2
//         fade = data.data[1].displayName
//         console.log(fade); // 3
//     } catch (err) {
//         // console.error(err);
//         console.log('after failing to fetching for data');
//     }
// }

// fetchAgents();
// console.log('global fade:', fade);

// fetch('api/agents')
//     .then(res => res.json())
//     .then(data => do sth with the data)

// IIFE: immediately invoked function expression

// 1. define the func
// const hello = (name) => {
//     console.log('hello ' + name);
// }

// 2. call the func
// hello('Peter')

// IIFE
// ((name) => {
//   console.log("hello " + name);
// })("peter");


// (async () => {
//   try {
//     const res = await fetch("https://valorant-api.com/v1/agents"); // 1
//     const data = await res.json(); // 2
//     fade = data.data[2].displayName;
//     console.log(fade); // 3
//   } catch (err) {
//     // console.error(err);
//     console.log("after failing to fetching for data");
//   }
// })();


// using default param value to avoid undefined
// const hello = (name = 'world') => {
//     console.log("hello " + name);
// }


const hello = (name) => {
    // 1. if - else
    // if (name) {
    //     console.log("hello " + name);
    // } else {
    //     console.log('hello world');
    // }

    // 2. && 
    // console log will ONLY run when name has a value
    // name && console.log('hello ' + name);

    // 3. ternary ? : 
    name ? console.log('hello ' + name) : console.log('hello world')
}


hello()
hello('peter')
hello(1)
hello(0)
hello(null)
hello(undefined)