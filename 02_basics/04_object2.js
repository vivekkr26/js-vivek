// const tunderUser  =new Object()

const tinderUser={}
tinderUser.name ="vivek"
tinderUser.isloggedIn=false

//console.log(tinderUser)

const regularUser= {
    email:"someone@gamil.com",
    fullname:{
        userfullname:{
            firstname:"vivek",
            lastname:"kaushal"
        }
    }
}

//console.log(regularUser.fullname.userfullname.lastname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3= { obj1,obj2}
//const obj3=Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2}
//console.log(obj3)

const user =[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gamil.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isloggedIn'))

const course = {
    coursename :"js in hindi",
    price:"999",
    instructor:"vivek"
}

course.instructor

const {instructor:inst}=course

console.log(inst);

{
   // "name":"vivek"
   // "coursename":"js in hindi "
   // "price":"free"
}

[
    {},
    {},
    {}
]