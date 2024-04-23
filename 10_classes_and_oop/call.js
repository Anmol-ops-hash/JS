function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUSer(username, email, password){
    SetUsername.call(this,username)

    this.email = email
    this.password = password
}

const chai = new createUSer("chai", "chai@fb.com", "123")
console.log(chai);