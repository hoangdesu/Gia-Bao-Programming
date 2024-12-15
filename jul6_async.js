// let data = null;
// console.log('start fetching', data);

// // setTimeout(() => {
// //     console.log('> fetching for data...');
// //     data = 'completed!'
// // }, 2 * 1000);


// function delay(t, val) {
//     return new Promise((resolve, reject) => {
//         if (val === 'completed') {
//             setTimeout(resolve, t, val)
//         } else {
//             setTimeout(reject, t, val)
//         }
//     })
// }
    
// const delayValue = delay(2000, 'completed')
//     .then(val => {
//         data = val;
//         console.log('done fetching data!', data);
//     })
//     .catch(e => console.log('promise rejected'))
    

// console.log(delayValue);

// async await

// 1. get the button from DOM using id
let data = null;

// 2. fetch data
fetch('https://valorant-api.com/v1/agents')
    // .then(res => {
    //     // console.log(res);
    //    return res.json();
    //     // console.log(data);
    // })
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        const gekko = data.data[0];
        // console.log(gekko.displayName);
        data = gekko;

        // 3. once data is available, I add an event listener to the button with the data
        // button.addEventListener('click', () => {
        //     console.log(gekko);
        //     fetch(...)
        //         .then(res2 => res2.json())
        //         .then(data2 => {
        //             data2 is available here
        //         })
        // })
    })
    .catch(err => {
        console.error(err);
    }) 


console.log('global data variable:', data);

// python
// 1. response = requests.get('https://valorant-api.com/v1/agents')
// 2. data = response.json()
// 3. print(data)

// callback hell

let fade = null;
async function fetchAgents() {
    const res = await fetch('https://valorant-api.com/v1/agents'); // 1
    const data = await res.json(); // 2
    fade = data.data[1].displayName
    console.log(fade); // 3
}

fetchAgents();
console.log('global fade:', fade);