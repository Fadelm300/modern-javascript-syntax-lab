//Review: Array.prototype.map()

const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});
console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']
//--------
//Exercise 1: Applying Array.prototype.map()
// Use `.map()` to iterate over the following array:
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
// Create a new array where each value is multiplied by 2 and log the new array.
// Your code here
const array_for_num = [3, 4, 5];

const array4 = array_for_num.map((num) => {
  return num * 2;
});
console.log(array4);
//=======================================================================================================
//Review: Array destructuring
// const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

// const [firstPet, secondPet] = petsArray;

// console.log(firstPet); // 'Rover'
// console.log(secondPet); // 'Snuffles'

// // Equivalent in traditional bracket notation:
// console.log(petsArray[0]); // 'Rover'
// console.log(petsArray[1]); // 'Snuffles'
//=============
//Exercise 2: Array destructuring
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
// Your code here

console.log(pizzaToppings[0]); 
console.log(pizzaToppings[1]); 

//================================
//Exercise 3: Destructuring objects
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  // Your code here
console.log(car.make);
console.log(car.model);

//================================

//Exercise 4: Applying the spread operator on arrays
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
// Your code here
const controversialPizzaToppings =[...pizzaToppings]
console.log( controversialPizzaToppings);

//============================================
//Exercise 5: Applying the spread operator on objects
// Duplicate the following object and spread its values into a new variable `myCar`.

const carex5 = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
  const myCar = {...carex5}
  myCar.make = 'Toyota'
  myCar.model= 'q7'

  console.log(myCar.make);
  console.log(myCar.model); 


  //Exercise 6: Dynamic keys in objects
// Create an object named userProfile. 
const userProfile ={  }
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
const propertyName = "username";
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.
userProfile[propertyName] = "Fadel";
console.log( userProfile)

// Exercise 7: Import and Export
// Exercise 7: Import and Export
// Follow the steps below for some practice with import and export. Update the values for default, age, and job accordingly:

// Initialize a node project:
// npm init -y
// Add the following property to package.json:
// "type":"module",
// Create two files: exportingFile.js and importingFile.js:
// touch exportingFile.js
// touch importingFile.js
// In exportingFile.js add the following:
// export default 'Matt';
// In importingFile.js add the following:
// import name from './exportingFile.js';
// console.log(name);
// Run importingFile.js like so:
// node importingFile.js
// To export additional values, update exportingFile.js like so:
// export default 'Matt';
// export const age = 43;
// export const job = 'programmer';
// These additions can be imported by updating importingFile.js like so:

// import name, { age, job } from './exportingFile.js';
// console.log(name, age, job);


//============================================


// Exercise 8: Default parameters
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
const fun = (noun='cat' ,  adjective='white') => {
    return "The "+noun +" is "+adjective;
 }
 console.log( fun())
//============================================







//  Exercise 9: Ternary operator
// Convert the following `if...else` statement in to a ternary:

let pizza3 = 'tasty';

if (pizza3 === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}
//This logic can be streamlined using a ternary:

let pizza ='tasty' ? "yum" : "yuck";
console.log(pizza);


// Your code here
//============================================





//  Exercise 10: Boolean gates

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = "es"; // Change to 'es', 'fr', etc., or keep it null
const LANG = localLangConfig || 'ar';  


// Log the result
console.log('Language setting:', LANG);


// 2. SET WEBSITE THEME
const userSavedTheme = 'dark'; // Change to 'dark', 'contrast', etc., or keep it null
const USER_THEME = userSavedTheme || 'light';

console.log('User theme setting:', USER_THEME);

//============================================





//  Exercise 11: Optional chaining
 // Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.
 
 const adventurer = {
   name: 'Alice',
 };
 
 let cat = adventurer.age?.name;; // Your code here
 
 console.log(cat);







