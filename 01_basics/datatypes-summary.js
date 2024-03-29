//  Primitive

// 7 types: String , Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn =false
const outsideTemp = null
let userEmail;//undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId);//false

const bigNumber = 32131273861278351267n

// dynamically type

// Reference (Non Primitive)

// Array, Objects, Functions //type of:- object

const heros = ["shaktiman", "nagrqa", "doga"];//Array
let myObj = {
    name: "anmol",
    age: 22,
}// object

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack(premitive)copy, Heap(Non-Premitive) original

let myYotubename = "anmoldotcom"
let anothername = myYotubename
anothername = "code"

console.log(myYotubename);
console.log(anothername);

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "anmol@google.com"

console.log(userOne.email);
console.log(userTwo.email);