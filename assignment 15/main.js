"use strict";
let guestList = ["Nimra", "Tahira", "Ayesha", "Faiza"];
let cantCome = guestList[3];
console.log(cantCome, "is not coming");
guestList.splice(3, 3, "Hadiya");
guestList.forEach(guest => console.log(`Hello ${guest}, You're invited to dinner`));
