const user = {
    username: 'anmol',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("Anmol", 12, true)
const userTwo = new User("God", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);

// new create a new empty object i.e new instance
// constructor function call in new object
// this key word inject
// we got function