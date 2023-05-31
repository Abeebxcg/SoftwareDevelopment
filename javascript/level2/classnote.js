//iteration: the for loop

for (let rep = 10; rep > 0; rep--){
    console.log(`lifting ${rep}`);
}

let details = [
     "asabeneh",
     "Joshua",
     17,
     true,
    
]
console.log(details);

// details.calcAge()

for (let i = 0; i < details.length; i++ )
{
    console.log(details[i]);
}
 // creaating an array from \n existing array using for loop
let typeofDetails = [];

for (let i = 0; i < details.length; i++ )
{
    typeofDetails.push(typeof details[i]);
}

console.log(typeofDetails);

let birthYear = [2014, 1991, 1907, 1918];
let ages = [];

for (let i = 0; i < birthYear.length; i++) {
  ages.push(2037 - birthYear[i]);
    }
console.log(ages)

//continue and break

let detail = [
     "asabeneh",
     "Joshua",
     17,
     true,
]
for (i = 0; i < detail.length; i++){

    if(typeof detail[i] !== "string") continue;
    {
console.log(detail[i], typeof detail[i])
    }
}