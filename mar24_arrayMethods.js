// spread operator ...

// const peter = {
//     name: 'peter',
//     lang: 'javascript'
// }

// const rename = (someone) => {
//     // someone.name = 'parker' // -> not good

//     const copiedPeter = {...someone} // copy object
//     copiedPeter.name = 'parker'
// }
// rename(peter)
// console.log(peter);

// array methods
const nums = [1, 2, 3]
nums.push(4)

// map will always return a new list (with the same length)
// originalArray.map(item => callback)

// const doubleNums = nums.map(num => num * 2)      // implicit return
// const doubleNums = nums.map(num => (num * 2))    // implicit return
const doubleNums = nums.map(num => {
    const twice = num * 2;
    return twice ; // explicit return
})


console.log(nums);
console.log(doubleNums);

// GET /games => response
const games = ['valorant', 'roblox', 'fifa online 4', 'league of legends']

// "map over elements"

{/* <ul>
    <li>games[0]</li>
    <li>games[1]</li>
    <li>games[2]</li>
</ul> */}

const gameListItem = games.map(g => `<li>${g}</li>`);

console.log(gameListItem);

// forEach -> for loop

// for (let i = 0; i < gameListItem.length; i++) {
//     console.log(gameListItem[i]);
// }

// for ... of ... => array
// for (let item of gameListItem) {
//     console.log(item);
// }

// forEach does NOT return any value. Only iterates thru every item in the array
let htmlTemplate = '<ul>\n';
gameListItem.forEach(item => {
    // console.log(item)
    htmlTemplate += '\t' + item;
    htmlTemplate += '\n'
}); 
htmlTemplate += '</ul>\n'

console.log('template:');
console.log(htmlTemplate);

// const contentDiv = document.querySelector('#content');

// contentDiv.innerHTML += htmlTemplate;


// notes on array methods
// cannot stop the methods with the break keyword

nums.forEach(num => {
    if (num % 2 === 0) {
        console.log('break:', num);
        // break;
    }
})

// filter: returns a new array, with the condition matched
 // implicitly returns the element matching the condition
// const oddNums = nums.filter(num => num % 2 === 1)

const oddNums = nums.filter(num => {
    // odd 
    return num % 2 === 1; // explicit return
})

console.log(oddNums);

console.log(games.indexOf('roblox'));
console.log(games.indexOf('dota 2')); // -1

// splice: insert + delete
// does affect original array
const copiedGames = [...games];
copiedGames.splice(2, 2, 'dota 2', 'ori and the blind forest')

games.push('overcooked')
games.pop()
console.log('new games:', copiedGames);
console.log('original games:', games);

// similar code in python
// total = 0;  

// for i in range(len(nums)):
//     total += nums[i]

const sumOfNums = nums.reduce((accumulator, num) => {
    accumulator += num
    return accumulator
}, 5)

console.log(sumOfNums);

