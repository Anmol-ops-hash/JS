//  Immediately Invoked  Function Expresison (IIFE)
// to avoid pollution made  by globale scope


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();// for IIFE when wrap int the paranthesis semicolen ";" must be present to end the syntax
// chai()

( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})("Anmol")