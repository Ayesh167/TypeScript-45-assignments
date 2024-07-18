let userNames = ["Haroon","Ayesha","Rabia","Admin"];
userNames = [];
if(userNames.length === 0 ){
    console.log("WE need to fing some users")
}else{
//using for each loop on array
userNames.forEach(oneuser =>{
    if(oneuser === "Admin"){
        console.log(`Hello ${oneuser}, would you like to see a status report`);
    }else{
        console.log(`Hello ${oneuser}, thank you for logging in again`);
    }
})
}
