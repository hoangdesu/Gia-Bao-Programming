// setTimeout(() => {

// }, timeout);

// Browser's API

// setTimeout(() => {
//   console.log("Hello");
// }, 1000);

// console.log("Hello");

// delay an action for a certain time (ms)

// synchronous: one at a time
// asynchronous: travel in a different timeline

setTimeout(() => {
  console.log('line 1')
}, 0);

console.log('line 2');

// setTimeout(() => {
//   console.log('line 2')
// }, 0);

// settimeout on function:
// - that function will be queued up (assigned lower priority)
// - JS event loop will wait to finish everything before executing the function

// [line 1, line 2]
//
// settimeout change the array position -> [line 2, line 1]

// HW: watch either (or both) videos on JS event loop, please take notes

const stop = document.querySelector('#stop');

const boom = document.querySelector('#boom');

// const bombTimer = setTimeout(() => {
//   boom.innerText = 'KABOOM!!!!!';
// }, 3000);

// stop.addEventListener('click', () => {
//   clearTimeout(bombTimer);
//   boom.innerText = 'BOMB HAS BEEN DEFUSED :D';
// })

// set timeout = for loop
// set interval = while loop

let bombTimer = 3; // seconds

const bombInterval = setInterval(() => {

  if (bombTimer === 0) {
    boom.innerText = 'KABOOM!!!!!';
    clearInterval(bombInterval);
  } else {
    boom.innerText = bombTimer;
  }

  --bombTimer;
}, 1000);

stop.addEventListener('click', () => {
  clearInterval(bombInterval);
  boom.innerText = 'BOMB HAS BEEN DEFUSED :D';
})
