// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best ");
    }
    // console.log(element);
    
}

// console.log(element);

for (let i = 0; i <= 10; i++) {
    // console.log(`inner loop ${i}`);
    for (let j = 0; j <= 10 ; j++) {
    // console.log(`outer loop ${j} and inenr loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j);
        
    }
    
}

let myArray = ["flas", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
}