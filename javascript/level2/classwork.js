// LECTURE: Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing 
// properties 'country', 'capital', 'language', 'population' and 
// 'neighbours' (an array like we used in previous assignments)
// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the 
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then 
// decrease it by two million using brackets notation.

// let myCountry = {
//     country: "Nigeria",
//     capital: "Abuja",
//     Language:"Yoruba",
//     Population: 7000000,
//     neighbors: 3

// }

// console.log(myCountry);
// console.log(`${myCountry.country} has ${myCountry.Population} ${myCountry.Language} speaking people, ${myCountry.neighbors} countries and a capital called ${myCountry.capital} `);
// myCountry.Population = myCountry.Population + 2000000;
// myCountry["Population"] = myCountry["Population"] + 2000000;
// console.log(myCountry);

// Add a method called 'checkIsland' to the 'myCountry' object. This 
// method will set a new property on the object, called 'isIsland'. 
// 'isIsland' will be true if there are no neighbouring countries, and false if 
// there are. Use the ternary operator to set the property


let myCountry2 = {
    country: "Nigeria",
    capital: "Abuja",
    Language:"Yoruba",
    Population: 7000000,
    neighbors: 3,
       checkIsland: function () {
 this.isIsland = this.neighbors.length === 0 ? true :
 false;
}};
console.log (myCountry2.checkIsland());
 console.log(myCountry2);

