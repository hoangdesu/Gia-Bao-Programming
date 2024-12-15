// variadic function
// const greetToAllNames = (greeting, mark, ...names) => {
//     let str = greeting + ' ';
//     for (let name of names) {
//         str += name + ', '
//     }
//     str += mark
//     console.log(str);
// }


// greetToAllNames('hello', '!', 'bao', 'peter', 'huynh', 'duc', 'jack', 'nhan', 'brian')

// ...names, greeting

// array and object methods

// some methods are:
//     - mutable: modifies the original array
//     - immutable: will NOT modify the original array

let frameworks = ['react', 'vue', 'angular', 'svelte']

const fullstackFrameworks = ['nextjs', 'nuxtjs', 'svelte kit']

frameworks = frameworks.concat(fullstackFrameworks, ['nodejs'], ['bun']);

// console.log(frameworks);

const longNameFrameworks = frameworks.every(fw => fw.length > 3);

console.log("longNameFrameworks: ", longNameFrameworks);

const has10chars = frameworks.some(fw => fw.length === 10);

console.log('has10chars', has10chars);

console.log(frameworks.indexOf('nodejs'));
console.log(frameworks.indexOf('expressjs')); // -1

// frameworks = frameworks.fill('python')

// nums = [0, 0, 0, 0, 0, 0 ...]
// nums.fill(0)

// for loop in range 100: 
//     nums.push(0)


// console.log(frameworks);


const shortNamedFrameworks = frameworks.filter(f => f.length < 6)
console.log('shortNamedFrameworks:', shortNamedFrameworks);

const findSvelte = frameworks.find(f => f.includes('sv'));
console.log('findSvelte', findSvelte);

for (let framework of frameworks.entries()) {
    // console.log(`key: ${key} - value: ${value}`);
    console.log(framework);
}
console.log('keys():', frameworks.keys());
console.log('values():', frameworks.values());

for (let v of frameworks.values()) {
    console.log('value = ' + v);
}

// entries = [key, value]

// frameworks = frameworks.reverse();

// remove the first element
const removedFirst = frameworks.shift(); 
console.log('removedFirst', removedFirst);


console.log(frameworks);


// Destructuring

const python = {
    name: 'Python',
    developer: 'Guido Van Rossum',
    year: 1995,
    isTrendy: true
}

// console.log(`${python.name} was developed by ${python.developer} in ${python.year}.`);

const { name: langName, developer, year } = python;

console.log(`${langName} was developed by ${developer} in ${year}.`);

// can rename the key after destructuring



