// //Date

// let myDate = new Date()
// console.log(myDate);                   //2025-05-10T13:45:12.748Z
// console.log(myDate.toString()); //Sat May 10 2025 13:45:12 GMT+0000 (Coordinated Universal Time)                              
// console.log(myDate.toDateString()); //Sat May 10 2025
// console.log(myDate.toLocaleString());   //5/10/2025, 1:45:12 PM
// console.log(typeof myDate); //object

// let myCreateDate = new Date(2025, 4, 10)
// console.log(myCreateDate.toLocaleString()); //5/10/2025, 12:00:00 AM

// let myCreateDateTime = new Date(2025, 4, 10, 5, 20)
// console.log(myCreateDateTime.toLocaleString());  //5/10/2025, 5:20:00 AM

let myCreateDate1 = new Date("2023-01-14")
// console.log(myCreateDate1.toLocaleString()); //1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate1.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());

console.log(`${newDate.getDate()} and the time ${newDate.getTime()}`);

newDate.toLocaleString('default',{
    weekday:"long"
})




















