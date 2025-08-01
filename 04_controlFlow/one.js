// //if

// const isUserloggedIn=true
// const temperature=41

// if(temperature == 40){
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50");
// }

// // >, <, <=,>=,===,!=,===,!==

// const score=200
// if(score>100){
//     let power="fly"
//     console.log(`user power: ${power}`);
    
// }

// console.log(`user power: ${power}`);


// const balance =500
// if(balance <500){
//     console.log("less than 500");
// }
// else if(balance <750){
//     console.log("less than 750");
// }
// else{
//     console.log("less than 1200");
// }

const isUserloggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(isUserloggedIn && debitCard){
    console.log("allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
    
}


