// const tinder = new Object ()  //single tom object hain

// const tinderTwo = {}  //Non Single tom Object hain
// console.log(tinder);
// console.log(tinderTwo);

const tinderUser = {}
tinderUser.Id = "202okk"
tinderUser.name = "Akshay"
tinderUser.isLoggedId = false

// console.log(tinderUser)


const regulerUser = {
    email:"akshay@231",
    fullName:{
        userFumallName:{
            UserName:"Akshay",
            lastName:"Dhumal"
        }

    }
}
// console.log(regulerUser)

const user = [
    {
        id:"asc123",
        email:"asdhumal123"
    },
    {
        id:"asc123",
        email:"asdhumal123"
    },
    {
        id:"asc123",
        email:"asdhumal123"
    }
]
user[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedId'))