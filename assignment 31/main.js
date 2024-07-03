"use strict";
let current_users = ["Haroon", "Ayesha", "Nimra", "Usman", "Aatika"];
let new_users = ["Bushra", "Mariyum", "Ali", "Aatika", "Ayesha"];
//loop to check user names
new_users.forEach(new_one_user => {
    let ourConditions = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLowerCase());
    if (ourConditions) {
        console.log(`sorry ${new_one_user} is already taken`);
    }
    else {
        console.log(`This user name ${new_one_user} is available`);
    }
});
