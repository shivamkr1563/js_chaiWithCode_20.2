// function setMyName(){
//     console.log("s");
//     console.log("h");
//     console.log("i");
//     console.log("v");
//     console.log("a");
//     console.log("m");
// }

// setMyName();

// function AddTwoNum(num1,num2){
//     console.log(num1+num2);
// }
// AddTwoNum(3,5)


// function AddTwoNum(num1,num2){
//     // let result = num1+num2;
//     // return result;
//     return num1+num2;
// }

// let result = AddTwoNum(3,5);
// console.log("result: ",result);

// function loginUserMessage(username="sam"){
//     if(username===undefined){
//         console.log("Insert username");
//         return;
//     }
//     return `${username} is loggedIn`;
// }

// let ans=loginUserMessage()
// console.log(ans);

//fuction with objects and array

function calculateCartprice(value1,value2,...nums){
    return nums;
}
//console.log(calculateCartprice(200,100,500,700));

//object 
const user ={
    username :"shivam",
    age :21
}
function handleObjectOfUser(newUser){
    console.log(`Username is ${newUser.username} and age is ${newUser.age}`)
}
handleObjectOfUser(user);
handleObjectOfUser({
    username:"Hitesh",
    age:23
})

//const myNewArray = [100,200,300,400];

function returnAllvalue(getArray){
    for(let i=0;i<5;i++){
        console.log(getArray[i]);    
    }
}

//returnAllvalue(myNewArray)
returnAllvalue([100,200,300,400,500])


