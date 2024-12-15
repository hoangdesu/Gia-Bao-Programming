const countries = [
  {
    name: "vietnam",
    capital: "hanoi",
    population: 90000000,
    isDeveloping: true,
  },
  {
    name: "japan",
    capital: "tokyo",
    population: 120000000,
    isDeveloping: false,
  },
];

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// can directly destructure the object inside the param, with multiple params

countries.forEach(({ name, capital, population, isDeveloping }, index) => {
    // console.log(country.name)

    console.log(`${index+1}. Capital of ${name} is ${capital}. It is a ${isDeveloping ? 'developing' : 'developed'} country with the population of ${numberWithCommas(population)} people.`);
})
