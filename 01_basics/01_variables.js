const accountId =144553
let accountEmail = "anmol@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail ="an@gmail.com"
accountPassword = "2121212"
accountCity = "Bangaluru"
let accountState;

 console.log(accountId);
/*Prefer not to use var
because issue in block scope and functional scope */
 console.table([accountId, accountEmail, accountPassword, accountCity, accountState])