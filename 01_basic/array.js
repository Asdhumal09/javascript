const marvel_hesros = ["ironman","thor","spiderman"]
const dc_hesros = ["batman","flash","superman"]

// ----Push Methodes---- Def:-Appends new elements to the end of an array, and returns the new length of the array.
// marvel_hesros.push(dc_hesros)
// console.log(marvel_hesros)
 

// Concat OR Spread Methode same use but different way we used Spread Methode most time

// ----Concat Methodes---- Def:-Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// const all_heros = marvel_hesros.concat(marvel_hesros)
// console.log(all_heros)


// ----Sperad(...) Methodes----
// const all_new_heros = [...dc_hesros,...marvel_hesros]
// console.log(all_new_heros)

// Flat Methode Diff:-Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// const another_array = [1,2,3,[4,6,9,],2,8,6,[6,9,7,[1,2,3,]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

// console.log(Array.isArray("Akshay"))
// console.log(Array.from("Akshay"))
// console.log(Array.from({name : "Akshay"}))  //Given empty Array

// let score1= 100
// let score2= 200
// let score3= 300
// console.log(Array.of(score1,score2,score3))