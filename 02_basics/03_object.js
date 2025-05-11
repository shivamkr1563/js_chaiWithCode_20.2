// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JSuser = {
    name : "shivam",
    "Full name" : "shivam kumar",
    [mySym] : "key1",
    email : "shivam@1563.gmail.com",
    age : 21,
    address : "Bihar",
    isLoggedIn : false,
    salary :6000000,
    lastLoggedInDay : ["Monday","saturday"]

}

// console.log(JSuser.email);
// console.log(JSuser["Full name"]);
// console.log(JSuser[mySym]);


// JSuser.email = "shivam.gmail.com"
// console.log(JSuser.email);
// Object.freeze(JSuser);

// JSuser.age = 50
// console.log(JSuser.age);

JSuser.greeting = function(){
    console.log("Hello shivam.");
}

JSuser.greeting2 = function(){
    console.log(`Hello JS user ${JSuser["Full name"]}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greeting2());





