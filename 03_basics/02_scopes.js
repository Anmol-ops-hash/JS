// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("Inner: ", a);

}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// console.log(a);
// console.log(b);

function one(){
    const username = "anmol"

    function two (){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()
if(true){
    const username = "anmol"
    if (username === "anmol"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}

addTwo(5)