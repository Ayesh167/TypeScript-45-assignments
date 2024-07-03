"use strict";
function create_car(manufacturer, model, ...options) {
    //initialize the car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    // add additional object to car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
//call the funtion to create car object
let my_car = create_car("toyota", "corolla", "color: black", "sunroof: true");
//print the car object
console.log(my_car);
