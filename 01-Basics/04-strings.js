const nameCustomer = "Maanvir Sidhu"
const reporCount = 15
console.log(`Hello my name is ${nameCustomer} and my repo count is ${reporCount}`);
console.log(nameCustomer.length);
console.log(nameCustomer.charAt(2))

const newString = nameCustomer.substring(0, 7)
console.log(newString);

const anotherString = nameCustomer.slice(-8)
console.log(anotherString);

// slice and substring are similar but slice can take negative index while substring cannot take negative index. 

// trim method is used to remove whitespace from both ends of a string.
const stringWithWhitespace = "   Hello World!   "
console.log(stringWithWhitespace.trim());

// replace method is used to replace a part of a string with another string.
const stringToReplace = "Hello World!"
const newString2 = stringToReplace.replace("World", "JavaScript")
console.log(newString2);

// split method is used to split a string into an array of substrings based on a specified separator.
const stringToSplit = "Hello World! Welcome to JavaScript."
const splittedString = stringToSplit.split(" ")
console.log(splittedString);


 