function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}
function make_great(magicians:string[]){
   return  magicians.map(name => `The Great ${name}`);
}
let magician_names = ["Harry","Usman","Hamza"];
//making copy of an array
let copy_names = magician_names.slice();
//adding great to the copy array
let copy_great = (make_great(copy_names));
//printing original array
show_magicians(magician_names);
//printing copy
show_magicians(copy_great);