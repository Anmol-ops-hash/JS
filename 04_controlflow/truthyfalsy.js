const userEmail = "anmol@gmail"

if (userEmail) {
    console.log("Got user email");
}else{
    console.log("Dont have user email");
}

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, Nan.

// Truthy values
// "0", "false", " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Obj is empty");
}

//  Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


// console.log(val1);

// Ternary operator

// condition ? true : false

const iceteaPrice = 100

iceteaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");