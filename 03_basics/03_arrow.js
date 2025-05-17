// const user = {
//     username : "shivam",
//     age : 22,

//     welcome : function(){
//         console.log(`${this.username} ,welcome home `);
//         //console.log(this);
        
//     }
// }
// user.welcome();
// user.username ="utkarsh"
// user.welcome();

// console.log(this);


// function chai(){
//     username="shivam",
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     username="hitesh",
//     console.log(this.username);
    
// }
// chai()

// const chai = ()=>{
//     let username ="shivam"
//     console.log(this);
    
// }
// chai()

// const Add = (num1,num2)=>{
//     return num1+num2
// }

// const Add = (num1,num2)=> num1+num2

// const Add = (num1,num2)=> (num1+num2)

const Add = (num1,num2)=> ({username : "shivam"})


console.log(Add());






