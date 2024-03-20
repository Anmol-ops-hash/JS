const name = "anmol"
const repoCount = 50

//  console.log(name + repoCount + " Value"); //outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//new string interpolletion

const gameName =  new String('anmol-hc-dc')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('1'));
// console.log(gameName.indexOf('l'));
const newString =  gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = " anmol "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "htpps://anmol.com/anmol%20nananware"

console.log(url.replace('%20', '-'));
console.log(url.includes('anmol'));

console.log(gameName.split('-'));