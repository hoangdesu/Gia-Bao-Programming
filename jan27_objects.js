// Object literals

// Class vs object

// Python: dictionary
// Java: Hashmap

// Data structure of unordered properties
// Key-value pairs

const peter = {
    name: 'Peter',
    lastName: 'Huynh',
    favGame: {
        title: 'Valorant',
        developer: 'Riot games'
    },
    1: 'one',
    'favorite food': 'fried chicken',
    school_gpa: 9.9,
    subjects: [10, true, 3.14, null, 'math', 'science', 'computer science'],
    programming_languages: [
        {
            name: 'Python',
            year: 2021
        },
        {
            name: 'Java',
            year: 2022
        },
        {
            name: 'JavaScript',
            year: 2023
        },
    ],
    1: 'ten', // duplicated key
};

// String[] subjects = {"math", "science"};

console.log(peter.name)
console.log(peter['lastName'])

console.log(peter.favGame['title']);

// all keys are converted into strings, even if its a number
console.log(peter['1'])
console.log(peter['favorite food']);
console.log(peter.school_gpa);
console.log(peter.subjects);

peter.school_gpa -= peter.school_gpa * 0.1
console.log(peter.school_gpa)

// array methods
peter.programming_languages.forEach((lang, index) => {
    console.log(`${index+1}. We learned ${lang.name} in ${lang['year']}`)
})

// NEW!!! -> spread operator

// all objects in JS are different!

const a = {
    name: 'a'
}

const b = {
    name: 'a'
}

// refers to the SAME Object, not gonna copy!
const c = b;
c.name = 'c' // b.name ==> 'c'


console.log(a === b); // true -> no because addresses are diff
console.log(b === c);

console.log(c.name, b.name)

// spread operator: takes all the values from an object and copy all pairs to a different object
const d = {
    ...b
}

d.name = 'd';

console.log(b.name, c.name, d.name)

console.log(d)

// ARRAY IS ALSO AN OBJECT IN JS!!!
const num1 = [1,2,3];
const num2 = [1,2,3];

console.log(typeof num1);
console.log(num1 === num2); // false

let equal = true;
num1.forEach((num, index) => {
    if (num !== num2[index]) equal = false;
});
console.log(equal);

const num3 = num2;
num3[0] = 9;
console.log(num2);

const num4 = [...num2];
num4[0] = 6;

console.log('num4:', num4);
console.log('num2:', num2);

const brian = {
    ...peter,
    name: 'Brian',
    lastName: 'Nguyen'
};

console.log('brian:', brian);
