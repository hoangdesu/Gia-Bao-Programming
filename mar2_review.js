// pass by value vs pass by reference

// --- PASS BY VALUE -> original values will NOT get affected
// const add = (a, b) => {
//     a = a * 2;
//     return a + b;
// }

// let a = 1;
// let b = 2;

// console.log('value of a before function call:', a);

// let total = add(a, b)
// console.log('Total:', total);

// console.log('value of a after function call:', a);


// --- PASS BY REFERENCE -> also change the original object's values
// const updatePersonName = (person) => {
//     person.name = 'PETER';
// }

// const brian = {
//     name: 'brian'
// }

// console.log('before update: ', brian.name);
// updatePersonName(brian)
// console.log('after update: ', brian.name);



// console.log('a' === 'a'); // true
// console.log([1] === [1]); // false

// console.log(017 === '017'); // false

// console.log(2 + '1'); // 21 => str + str
// console.log(2 - '1'); // 1 => num - num => num

// let food = ['pho', 'com tam', 'hu tiu']

// food = ['sushi', 'sashimi', 'takoyaki']

// // can still reassign values inside arrays and objs
// food[0] = 'sushi'
// food[1] = 'sashimi'
// food[2] = 'takoyaki'

// console.log(food);

// ex: write a function that compares and return the equality of 2 arrays

// shallow compare:
//     arr1 = [1,2,3]
//     arr2 = [1,2,3]
//     => true

//     arr1 = [1,2,3]
//     arr2 = [1,3,2]
//     => false

// deep compare:
//     arr1 = [1,1,2,3]
//     arr2 = [1,3,2,1]
//     => true

//     arr1 = [1,1,2,3]
//     arr2 = [1,3,2,4]
//     => false

// shallowCompare(array1, array2) => true
// deepCompare(a)

// const arr = [1,2,3]

// arr.forEach(num => {
//     console.log(num)
// })

// // for 100 times {
// //     if (i === 10) {
// //         break / return
// //     }
// // }

// => cannot 

