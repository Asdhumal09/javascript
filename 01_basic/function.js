
function sayMyName (){
console.log("A")
console.log("K")
console.log("S")
console.log("H")
console.log("A")
console.log("Y")
}
// sayMyName()

function addTwoNumber(nuber1, number2){
    console.log(nuber1 + number2)
}
// addTwoNumber(5,9)

function addTwoNumber(nuber1,number2){
    // let  result = nuber1+number2    ->1st option
    // return result   ->We have two option 
    return nuber1 + number2 //2nd option
}
// const result = addTwoNumber(5,4)
// console.log("Result:",result);



function logginUser(username){
    if(username === undefined){
console.log("Please Enter You User Name");
    }
    return `${username} Just Logged in`
}
// console.log(logginUser("Akshay"))
// console.log(logginUser())


// -----------------------------------------

function calculateCartPrice(val1 ,val2, ...num1){
return num1
}
console.log(calculateCartPrice(200,1000,500,600))

