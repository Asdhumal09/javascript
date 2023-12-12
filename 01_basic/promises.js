const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
resolve({username:"akshay01",email:"akshaydhumal123.com"},1000)
    })
})
promiseOne.then(function(user){
    console.log(user);
})