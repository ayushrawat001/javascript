mySym = Symbol("myKey1")

const jsUser ={
    name:"ayush",
    age:10,
    "eligible":true,
    [mySym] : "window",
    location:"jaipur",
    isLoggedIn : false,
    email:"ayush.com",    
}
// console.log(jsUser.name)
// console.log(jsUser["eligible"])
// Object.freeze(jsUser) // its use for not further change in object
// console.log(jsUser)
jsUser.greeting = function()
{
    console.log("hello js user")
}
// console.log(jsUser.greeting())

jsUser.greetingTwo = function()
{
    console.log(`hello js user ${this.name}`)
}

// console.log(jsUser.greetingTwo())


///////////////////////////////////////////////////////////////

const obj1 = {
    1:"a",2:"b",3:"c"
}

const obj2= {
    4:"a",5:"b",6:"c"
}

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)

const obj4={...obj1,...obj2}
console.log(obj4)