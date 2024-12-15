const input = require('prompt-sync')();

const vietnam = {
    capital: 'Ha Noi'
}

const japan = {
    capital: 'Tokyo'
}

// renaming destructured keys
const { capital: vnCapital } = vietnam;
const { capital: jpCapital } = japan;

console.log('Capital of Vietnam is ' + vnCapital);
console.log('Capital of Japan is ' + jpCapital);

// Destructuring arrays
const food = ['sushi', 'ramen', 'takoyaki'];

const [casualDish, mostFavoriteDish] = food;
const [,, snackDish] = food;

console.log(`My favorite dish is ${mostFavoriteDish} but I like ${casualDish} too! Sometimes I also order some ${snackDish} for snack`);

const countries = [
    // {
    //     name: string,
    //     capital: string,
    //     population: 5,
    //     isDeveloping: boolean //
    // },
    //  {
    //     name: string,
    //     capital: string,
    //     population: 6,
    //     isDeveloping: boolean //
    // },
    //      {
    //     name: string,
    //     capital: string,
    //     population: 4,
    //     isDeveloping: boolean //
    // }

    
    // {
    //     name: 'vietnam',
    //     capital: 'hanoi',
    //     population: 90000000,
    //     isDeveloping: true
    // },
    // {
    //     name: 'japan',
    //     capital: 'tokyo',
    //     population: 120000000,
    //     isDeveloping: false
    // },
]



// const userInput = input("What's your name: ");

// console.log(`Hello ${userInput}`);

// 1. Enter a country:
// 2. If a country exists in db -> try use some array methods (.find, .indexOf)
// 3. What do you want to query: capital



// userinput = input('question')

// SELECT name, population
// FROM countries
// WHERE population > 10000



// Exercise 2: 
// Query for population: ">1000"
// Query for population: "<= 10000"

// ">= 5"

// List of countries having population greater than 5:
//     1. country1: 5
//     2. country2: 6

// .filter()

// countries.map(country )