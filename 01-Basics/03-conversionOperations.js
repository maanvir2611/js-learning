let score =33
console.log(score, typeof score)

score = "33"
console.log(score, typeof score)

score = Number(score) //Converting string to number
console.log(score, typeof score)

score = String(score) //Converting number to string
console.log(score, typeof score)

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) //Converting number to boolean
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn)

isLoggedIn = 0
booleanIsLoggedIn = Boolean(isLoggedIn) //Converting number to boolean
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn)

let someNumber = "123abc"
let convertedNumber = Number(someNumber) //This will result in NaN (Not a Number) because the string cannot be fully converted to a valid number.
console.log(convertedNumber, typeof convertedNumber)

let validNumber = "123"
convertedNumber = Number(validNumber) //This will successfully convert the string to a number.
console.log(convertedNumber, typeof convertedNumber)            