"use strict";
// creating a guest list array
let guestList = ["Nimra", "Tahira", "Ayesha", "Faiza"];
//remving 1 person
let cantCome = guestList[3];
console.log(cantCome, "is not coming");
//replacing 1 person
guestList.splice(3, 3, "Hadiya");
guestList.forEach(guest => console.log(`Hello ${guest}, You're invited to dinner`));
//adding 3 more people
console.log("Good New!!! Now I found a new bigger table so I'm going to invite three more people.");
//adding 1 in start
guestList.unshift("Imama");
//adding 1 in end
guestList.push("Sahar");
//adding a guest in middle
let middleGuest = Math.floor(guestList.length / 2);
guestList.splice(middleGuest, 0, "Hiba");
console.log("Updated list of our guests");
guestList.forEach(newList => console.log(`Hello ${newList}, You're invited to dinner.`));
