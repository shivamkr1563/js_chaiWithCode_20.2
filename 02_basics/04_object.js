//const tinderUser = {}
const tinderUser = new Object()
//console.log(tinderUser);

tinderUser.email = "shivam@gmail.com"
tinderUser.age = 22
tinderUser.isloggedIn =false
tinderUser.name ="shivam"

//console.log(tinderUser);

const regularUser={
    email : "shivamkumar@outlook.in",
    name :{
        fullname :{
            firstname :"shivam",
            secondname :"kumar"
        }
    }
}
//console.log(regularUser.name.fullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

//const obj4 = {obj1,obj2,obj3}
//const obj4 =Object.assign({},obj1,obj2,obj3)
//const obj4 = {...obj1,...obj2,...obj3}
//console.log(obj4);

const user = [
    {
        id :"1234abc",
        email : "shivamkr@gmail.com"
    },
    {
        id : "456abc",
        email : "djkj@gamil.con"
    }
]
//console.log(user[1].email);

// console.log(Object.entries(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty("homework"));

//object destructuring
const course = {
    coursename : "shivam ki padhai",
    price :"999",
    courseInstructor : "shivam"
}

//course.courseInstructor

//De-structuring objects and accessing values from JSON APIs
const {courseInstructor:instructor} = course

//console.log(instructor);
//console.log(courseInstructor);


//JSON API intro
// {
//     "name":"shivam",
//     "coursename" : "shivam ka padhai",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]







