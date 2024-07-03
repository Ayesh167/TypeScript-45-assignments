"use strict";
function make_shirt(size = "Large", printMessage = "I love typescript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
make_shirt();
//calling a function with medium size
make_shirt("medium");
//again calling with small size and different message
make_shirt("small", "I love programming");
