//  singleton:- made by cunstructor not literals
// Object.create

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Anmol",
    "full name": "Nannaware",
    [mySym]: "mykey1",
    age: 18,
    location: "Nagpur",
    email: "anmol@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "anmol@chatgpt.com"
console.log(JsUser.email);

// Object.freeze(JsUser)
JsUser.email = "anmol@ibm.com"
console.log(JsUser.email);

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greeting2 = function(){
    console.log(`hello user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
