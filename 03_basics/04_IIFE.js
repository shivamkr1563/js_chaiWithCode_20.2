//Immendiately invoked function Exprience

(function chai(){
    //NAMED IIFA
    console.log(`hello world!`);
})();

(()=>{
    //unnamed IIFA
    console.log(`shivam is good boy`);
})();

((name)=>{
    console.log(`hello,I am ${name}`);
})("shivam")