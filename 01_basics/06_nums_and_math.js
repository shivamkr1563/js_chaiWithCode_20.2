const score=500
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(1));


const otherNumber=123.2643
console.log(otherNumber.toPrecision(3));

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));

// **********Maths**********

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.9));
console.log(Math.floor(4.6));
console.log(Math.min(4,8,3,2));
console.log(Math.max(4,5,2,7,9));


console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=20
const max=30

console.log(Math.floor(Math.random() * (max-min+1))+min);

