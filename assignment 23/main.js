"use strict";
let apple = "apple";
//test for equality and ineuality with strings
console.log("Is apple is equal to apple?");
console.log(apple == apple);
console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");
let uppercase = "APPLE";
//test using lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercase.toLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercase.toLowerCase() != "apple");
let ten = 10;
let twenty = 20;
//numerical test involving euality and inequality
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
console.log("\nIs ten is smaller than twenty?");
console.log(ten < twenty);
console.log("\nIs ten is greater than twenty?");
console.log(ten > twenty);
console.log("\nIs ten is smaller than or equal to twenty?");
console.log(ten <= twenty);
console.log("\nIs ten is greater than or equal to twenty?");
console.log(ten >= twenty);
//test usin "and" and "or" operator
//using &&
console.log("\nTwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\nTwenty is not equal to 10 and twenty is smaller than 10");
console.log(twenty != 10 && twenty < 10);
//using ||
console.log("\nTwenty is equal to 10 or twenty is smaller than 10");
console.log(twenty == 10 || twenty < 10);
console.log("\nTwenty is not equal to 10 or twenty is smaller than 10");
console.log(twenty != 10 || twenty < 10);
let fruits = ["Apple", "Banana", "Mango"];
//test weather an item is include in array
console.log("\nIs banana is include in my fruits array?");
console.log(fruits.includes("Banana"));
console.log("\nIs banana is not include in my fruits array?");
console.log(!fruits.includes("Banana"));
