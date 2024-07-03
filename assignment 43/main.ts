//making function with rest parameters
function makeSandwich(...items:string[]){
    console.log("\n Making a sandwich with the following items:\n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("Now enjoy sandwich");
}
//call function 3 times with 3 different arguments
makeSandwich("chicken","cheese","ketchup");
makeSandwich("Bread","Butter");
makeSandwich("bread","egg");