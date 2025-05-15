// let a=300

// if(true){
//     const a=30
//     let b=40
//     //console.log("Inner: ",a);
// }
// //console.log(a);

// function one(){
//     let username ="shivam"

//     function two(){
//         let websites ="youtube "
//         console.log(websites + username);
        
//     }
//     two()
// }
// //one()

if(true){
    const username = "shivam"
    
    if(username === "shivam"){
        const website =" youtube"
        console.log(username + website);
        
    }
    
}
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
}


//******************
console.log(addOne(5));

function addOne(num){
    return num+1
}


const addTwo = function(num){
    return num+2
}
console.log(addTwo(10));
