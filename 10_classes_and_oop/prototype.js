//  let myName = "Anmol   "

// //  console.log(myName.trim().length);
//  console.log(myName.trim().length);

let myHeros = ["thor", "spidierman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// creating method in object by default
Object.prototype.anmol = function(){
    console.log(`anmol is present in all objects`);
}

Array.prototype.heyanmol = function(){
    console.log(`anmol says hello`);
}
// heroPower.anmol()
myHeros.anmol()
myHeros.heyanmol()
// heroPower.heyanmol()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher ={
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssingment: 'JS assingment',
    fullTIme: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// new syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiaurcode  "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()

"anmol".trueLength()
"iceTea".trueLength()