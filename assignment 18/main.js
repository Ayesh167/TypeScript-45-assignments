"use strict";
let countriesToVisit = ["Saudia", "Dubai", "Turkey", "Africa"];
//first printing array in it's original order
console.log("original order", countriesToVisit);
//now printing in alphabetical format
console.log("alphabetical order", [...countriesToVisit].sort());
//now printing original array again to see there is no change in orirginal array 
console.log("original array is still in it's original order", countriesToVisit);
//now printing array in reverse alphabetical order without changing original order
console.log("reverse alphabetical order", [...countriesToVisit].sort().reverse());
//again printing to show there is no change in original array
console.log("original order", countriesToVisit);
//reverse the order of list
console.log("reverse original array", countriesToVisit.reverse());
//now again reversing for back to original order
console.log("reverse array again for back to it's original order", countriesToVisit.reverse());
//sorting list in alphabetical order
console.log("sort array in alphabetical order", countriesToVisit.sort());
//now reversing array 
console.log("sorting array in reverse alphabetical order", countriesToVisit.reverse());
