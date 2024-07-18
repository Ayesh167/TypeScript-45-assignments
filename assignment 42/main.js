"use strict";
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magician_names = ["Harry", "Usman", "Hamza"];
let great_magicians = make_great(magician_names);
show_magicians(great_magicians);
