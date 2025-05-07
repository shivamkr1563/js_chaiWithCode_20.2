//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 //NUMBER
const scoreValue = 100.3  //Float

const isLoggedIn = false //bool
const outsideTemp = null    //null
let userEmail;  //undefined

const id = Symbol('123')    //symbol(unique)
const anotherId = Symbol('123')

console.log(id === anotherId); //both are not same 

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3