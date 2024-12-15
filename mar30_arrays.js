// for ... of: iterate thru the elements in an ARRAY

// const progLangs = ['python', 'go', 'typescript', 'java']

// console.log('Programming languages:');
// for (let lang of progLangs) {
//     console.log(lang);
// }

// for ... in: iterate thru the keys of an OBJECT
const react = {
    programmingLanguages: ['javascript', 'typesript'],
    company: 'facebook',
    version: 19,
    rank: 1
};

// console.log('\nReact:');
for (let key in react) {
    console.log('key:', key, ' - value:', react[key]);
}

// Variadic function: using rest params

// const hello = (name) => {
//     console.log('hello ' + name);
// }

// hello('Peter')

const sumThemUp = (...nums) => (
  nums.reduce((total, currentNum) => {
    total += currentNum;
    return total;
  }, 0)
)

// public static int sumThemUp(int[] nums) {
//     // cal total...
//     return total;
// }

// int total = sumThemUp(nums);
// sout(total);

// console.log(sumThemUp(1, 2, 3));
// console.log(sumThemUp(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// let isRich = true;

// if (isRich) {
//     console.log('buy a lambo');
// } else {
//     console.log('too broke');
// }

// Ternary operator ?

// condition satisfied && do sth

// ??

// isRich ? console.log('buy a mercedes') : console.log('eat hao hao');

// truthy & falsy values

// 1 -> true
// 0 -> false

// if the objec "react" is present
if (react) {
    console.log('the object is present');
} else {
    console.log('missing object');
}

// let num = 0;

// num ? console.log('num is here') : console.log('no num');

// null, undefined -> false

const pokemon = {
    name: 'pikachu'
};

pokemon ? console.log(pokemon.name) : console.log('no pokemon');

const angular = {
    // name: {
    //     officialName: 'angular',
    //     alternativeName: 'angularjs'
    // }
}

// Optional chaining 
// prevents the app from crashing 
// -> will only evaluate to falsy value if data is missing
console.log(angular?.name?.officialName);

// + combined with default value
console.log(user?.name?.accountName || 'User')

