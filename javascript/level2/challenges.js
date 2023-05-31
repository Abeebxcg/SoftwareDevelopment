// coding challenge3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
// implement the calculations! Remember: BMI = mass / height ** 2 = mass 
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and 
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
// method on both objects). Store the BMI value to a property, and also return it 
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the 
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
// tall.
let john = {
    johnW: 92,
    johnH: 1.95,
    calcBMI: function(){
   this.BMI = this.johnW / this.johnH ** 2;
    return this.BMI;
    }
}
let mark = {
    markW: 78,
    markH: 1.69,
    calcBMI: function(){
    this.BMI = this.markW / this.markH**2;
    return this.BMI;
    }
}

mark.calcBMI()
john.calcBMI()

if (mark.BMI > john.BMI){
    console.log(`marks BMI ${mark.BMI} is greater than john's BMI ${john.BMI}`);
}
else{
     console.log(`john's BMI ${john.BMI} is greater than mark's BMI ${mark.BMI}`);

}