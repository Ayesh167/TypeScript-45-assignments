// creating a guest list array
let guestList = ["Nimra","Tahira","Ayesha","Faiza"];
//remving 1 person
let cantCome = guestList [3];
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
let middleGuest: number = Math.floor(guestList.length / 2);
guestList.splice(middleGuest, 0, "Hiba");
//printing new messages
console.log("Updated list of our guests");
guestList.forEach(newList => console.log(`Hello ${newList}, You're invited to dinner.`))


//shrinking guests because you have space for only two
console.log("Unfortunately, the new dinner table won't arrive on time , so I can only invite two people at dinner");
//removing guests untill only two remains
while(guestList.length > 2){
    let removeGuest = guestList.pop();
    console.log(`I'm sorry ${guestList}, I can't invite you to dinner.`);
}
console.log("invitation to the 2 remaining guests");
//inviting last 2 guests
guestList.forEach(twoGuests => console.log(`${twoGuests}, You're still invited to dinner.`));
//rempving last 2 guests from list
guestList.pop();
guestList.pop();
console.log("Empty list",guestList);
