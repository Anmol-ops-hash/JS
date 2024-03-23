// if 
// condition evaluate true then it goes to the block
// const isUserloggedIn = true
const temperature = 41

// if (temperature < 50){
// console.log("less than 50");
// } else{

//     console.log("temperature is greater than 50");
// }
// console.log("Executed");

// <, >, <=, >=, ==, ===, !=, !==

// const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);

// const balance =  1000

// if (balance > 500) console.log("test");//implicit scope single line

//nesting, multiple condition

// if(balance < 500) {
//     console.log("less than");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// }else{
//     console.log("less than 1200");

// }

const isUserloggedIn =  true 
const   debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmali = true

if (isUserloggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

if (loggedInFromEmali|| loggedInFromGoogle) {
    console.log(`user logged in`);
}