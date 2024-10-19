//singleton 
// object.create

//object literals

const mySym=Symbol("key1")

const JsUser = {
    name : "vivek",
    "full name" :"vivek kumar kaushal",
    [mySym]:"mykey1",
    age:18,
    locaion:"bhopal",
    email:"vivekkumarkaushal",
    isLoggedIn:false,
    lastLogin:["monday","saturday"]

}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])

JsUser.email="vivek@gmail"
Object.freeze(JsUser)
JsUser.email="vivek@hotmail"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());