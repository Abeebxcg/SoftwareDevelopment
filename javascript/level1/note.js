// let marksMass = 1.69, marksHeight = 1.69, johnsMass = 92 , johnsHeight = 1.95; 
// let marksBMI = marksMass / marksHeight ** 2;
// let johnsBMI = johnsMass / johnsHeight ** 2;
// console.log(johnsBMI, marksBMI);
// let emoji = `👮`
// console.log(emoji);

// if(marksBMI > johnsBMI){
//     console.log(`marks BMI is higher then johns BMI`)
// }
// else{
//     console.log(`Johns BMI is higher then marks BMI`)
// };
// console.log(`Johns BMI is ${johnsBMI-marksBMI} greater than marks BMI`);


// const money = 0;
// if (money) {console.log("Dont spend it all")}
// else {console.log("spend it all")};

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// if (numNeighbours == 1) {console.log("only one border")}
// else if (numNeighbours > 1) {console.log("we are much in our country")}
// else {console.log("no borders")};

// let dolphinsScore = (109+95+106)/3;
// let koalasScore = (109+95+106)/3;

// if (dolphinsScore > koalasScore &&  dolphinsScore >= 100) {console.log("dolphin is the winner")}
// else if ((koalasScore > dolphinsScore ) && koalasScore >= 100) {console.log("koala is the winner")}
// else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100) {console.log("its a draw")};


// let day = "Wednesday";

// if (day === "monday"){console.log("Its a new day, plan your life")}
// else if (day === "tuesday"){ console.log("Today is second day of the week")}
// else if ( day === "wednesday" || "Thursday" ) {console.log("TOday is another day")}
// else if ( day === "Friday") {console.log("Friday is for solatul jumah")}
// else { console.log("Today is Weekend")}

// let dyas;
// switch (dyas){
//      case "monday":
//         console.log("we are good to go")
//         break;

//         case "tuesday":
//             consolee.log("brain is here");
//             break;
//             default:
//                 console.log("Yay");
//     }
//         let solat = "maghrib"; 
//     const prayer = solat === "maghrib"? "pray" : "dont pray";
//     console.log(`i am expected to ${solat === "maghrib"? "pray" : "dont pray"}`)

//     let bill = 275;
//     const tip = (bill >= 50 || bill <= 300)? 0.15 * bill :0.2 * bill;
//     console.log(`the bill was ${bill}, the tip was ${ (bill >= 50 || bill <= 300)? 0.15 * bill :0.2 * bill} and the toal value was ${bill + tip}`)

//     let language = prompt("Enter your language")

//     switch (language){
//         case "mandarin":
//         case "Chinese":
//             console.log("Most number of native speakers");
//             break;
//         case "Spanish":
//             console.log("2nd place in number of native");
//             break;
//         case "hindi":
//             console.log("NUmber 4")
//             break;
//         case "arabic":
//             console.log("5th most spokn language");
//             default:
//                 console.log("Great Language too: D");
//     }

//     let population = 33;
//     const decision = population > 33? console.log(`Portugal's population is above average`): console.log(`Portugal's population is below average`);
    
// function describeCountry(country, population, capitalCity){
//     const details = console.log(`${country} has ${population}million people and capital city is ${capitalCity}`)
//     return details
// };
// describeCountry("Finland", 6, "Helsinki");
// describeCountry("Germany", 6, "Berlin");
// describeCountry("France", 6, "Paris");

//  let dateNow = new Date();
// function calcAge1(birthYear){
//     const userAge = ` Hello!! you are ${dateNow.getFullYear()-birthYear} years of age`
//     return userAge
// };

// console.log(calcAge1(1991))


// const calcAge2 = function (birthYears){
    
//      const userAge2 = ` Hello!! you are ${dateNow.getFullYear()-birthYears} years of age`
//     return userAge2
// }
// console.log(calcAge2(1991))

// const age3 = (birthyear, population) => ` i am ${2023 - birthyear} years of age, the ${population} of my country`;
// console.log(age3(1991, 23));

// function percentageofWorld1(population){
//     const countryPercentagePopulation = 7900 *  100/population;
//     return `China has ${population} million people, so it's about ${countryPercentagePopulation} of world's population `
// }


// const percentageofWorld1 = function (population){
//     const countryPercentagePopulation = 7900 *  100/population;
//     return countryPercentagePopulation
// }
// const why = console.log(percentageofWorld1(50000))

// const percentageofWorld3 = population =>{ 
//     const countryPercentagePopulation = 7900 *  100/population;
//     return countryPercentagePopulation 
// }


// const describePopulation = function(countrys, population){
//     const calcPercentage = percentageofWorld3(population);

//     return `${countrys} has ${population} people `
// };

// console.log(describePopulation("Nigeria", 1000));

// //coding challenge 1 part two

// const calcAverage = (first, second, third) => {
//     let average = (first + second + third)/3

// return average
// }

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoala = calcAverage(23, 34, 27);

// const chekwinner = function(avg1, avg2){
//     if (avgKoala >= 2 * avgDolphins){
//         console.log(`"koalas win (${avgKoala} vs ${avgDolphins}")`)
//     } 
//     else if(avgDolphins >= 2 * avgKoala){
//         console.log(`"DOlphins win (${avgDolphins} vs ${avgKoala}")`)
//     }

//     else{
//         console.log(`This is a draw`)
//     }

// };

// chekwinner(avgDolphins, avgKoala)


// const calcLinfunction = function (a,b,c){
//     let x = ((-b * y) - c) / a;
//     var y = ((-a * x) - c) / b;
//     return 
// }

// const eroot = function (a, b, c){
// let discriminant = b**2 - (4 * a * c);
//  let root1 = -b + Math.sqrt(discriminant)
//  let root2 = -b - Math.sqrt(discriminant)
// if (discriminant > 0){
//     console.log(`X = ${root1} and X = ${root2}`)
   

//     return 
// }}
// console.log (eroot(1, 3, 2))

// const calcTip = function(bill){
// const tip = bill >= 50 && bill <= 300? (0.15*bill):(0.2*bill)
// return tip     
// }

// console.log(calcTip(100))

// let bills = [125, 555, 44];
// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [tips[0]+bills[0], tips[1]+bills[1], tips[2]+bills[2]];
// console.log(total);
// // Jonas is a 46 year old teacher, and he has a driver's license
// const jonas = {
//     firstName: "Jonas",
//     ifDriversLicense: true,
//     calcage: function(birthYear){
//         return 2023-birthYear
//     },
//     job: "teacher"
// }

// console.log(`${jonas.firstName} is a ${jonas.calcage(1991)} years old ${jonas.job}, and ${jonas.ifDriversLicense? "He has a driver's license": "He doesn't"} `);

// let myDetails = {
//     firstNam: "Olalere",
//     lastNam: "Abeeb",
//     getFullName: function(){
//         return  `${this.lastNam} ${this.firstNam}`
//     }   
// }
// myDetails.nationality = "Nigerain"
// console.log(myDetails);

// 
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYeah: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,

//    calcAge: function (birthYeah) {
//      return 2037 - birthYeah;
//   }

//   calcAge: function () {
//      console.log(this);
//     return 2037 - this.birthYeah;
//   }

  // calcAge: function () {
  //   this.age = 2037 - this.birthYeah;
  //   return this.age;
  // },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//   }
// };

let jonas = {
  fName: "jonas",
  lName: "stellsman",
  birthYear: 2101,
  age: function () {
    return 2037 - this.birthYear
  }
}

console.log(jonas.age())

