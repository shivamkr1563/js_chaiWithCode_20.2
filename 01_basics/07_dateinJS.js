//Date

let myDate = new Date()
console.log(myDate);                   //2025-05-10T13:45:12.748Z
console.log(myDate.toString()); //Sat May 10 2025 13:45:12 GMT+0000 (Coordinated Universal Time)                              
console.log(myDate.toDateString()); //Sat May 10 2025
console.log(myDate.toLocaleString());   //5/10/2025, 1:45:12 PM
console.log(typeof myDate); //object

let myCreateDate = new Date(2025, 4, 10)
console.log(myCreateDate.toLocaleString()); //5/10/2025, 12:00:00 AM

let myCreateDateTime = new Date(2025, 4, 10, 5, 20)
console.log(myCreateDateTime.toLocaleString());










