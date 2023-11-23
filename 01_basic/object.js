//Object Literals
const mySym = Symbol("key_1");

const jsUser = {
  name: "Akshay",
  age: 23,
  gmail: "akshay123@gmail.com",
  location: "pune",
  isLoggedIn: false,
  lastlogginDays: ["monday", "saturday"],
  [mySym]: "mykey1",
};
// We have two Print Option
console.log(jsUser.name); //1st  Option
console.log(jsUser["name"]); //2nd  Option we used this One
// console.log(jsUser[mySym]);

jsUser.gmail = "AkshayDhumal123gmail.com"
// Object.freeze(jsUser) // We used you want any object not changed that time we used this methode (object.freeze)
// jsUser.gmail = "asdhumal133gmail.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello Js User")
}
console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`Hello Js User ${
        this.name
    }`)
}
console.log(jsUser.greetingTwo())