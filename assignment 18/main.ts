//taking excercise 14
let guestList = ["Nimra","Tahira","Ayesha","Faiza"];
guestList.forEach(guest => console.log(`Hello ${guest}, I'm inviting you to dinner.`));
//now printing the number of people I'm inviting
let guestsLength: number = guestList.length;
console.log(`We are inviting ${guestsLength} people to dinner.`);