// console.log("A");
// console.log("N");
// console.log("M");
// console.log("O");
// console.log("L");

// function defination
function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("M");
    console.log("O");
    console.log("L");
}
//sayMyName:-refrence, ():-execution
// sayMyName()
// "()":- when define ist called parameters
// "()":- when called ist called arguments


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 4)
// console.log("Result",result);

function loginUserMessage(username = "sam" /* defaultvalue */){
    if(username === undefined/** !username */){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Anmol"))
// console.log(loginUserMessage())

// "...":- rest operator
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "anmol",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user) made object

// without making object
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]));
