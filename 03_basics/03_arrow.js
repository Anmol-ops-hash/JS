const user = {
    username: "anmol",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username ="anmol"
//     console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = "anmol"
//     console.log(this.username);
// }
// chai()

const chai =  () => {
    let username = "anmol"
    console.log(this.username);
}
// chai()

// when use {} curly braces must use return key words
// const addTwo = (num1, num2)=>{
//     return num1+num2
// }

//no {} curlybrces no return key words and toavoid cunfusing can use paranthesis
// const addTwo = (num1, num2)=> num1+num2

// const addTwo = (num1, num2) => (num1+num2)

const addTwo = (num1, num2) => ({username: "anmol"})//object ust wrap in to the paranthesis

console.log(addTwo(3,4));

const myArray = [2, 5, 3, 7,8]

// myArray.forEach(function (){})
// myArray.forEach(function () => {})
// myArray.forEach(function () => ())