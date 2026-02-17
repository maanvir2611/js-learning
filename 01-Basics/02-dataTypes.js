"use strict"; //Treats all JavaScript code as modern and prevents the use of deprecated features 

//alert(3+3) We are usingnodejs, not browser, so alert will not work. We can use console.log instead.

// Data Types in JavaScript

// 1. Primitive Data Types
let name = "John";  // String: A sequence of characters enclosed in quotes.
let age = 30;       // Number: Represents both integer and floating-point numbers.
let isStudent = true; // Boolean: Represents a logical entity that can be either true or false.
let nullValue = null; // Null: Represents the intentional absence of any object value.
let undefinedValue;   // Undefined: Represents a variable that has been declared but not assigned a value.
let symbolValue = Symbol("unique"); // Symbol: A unique and immutable primitive value used as an identifier.

// 2. Non-Primitive Data Types
let person = {       // Object: A collection of key-value pairs.
    name: "Alice",
    age: 25,
    isStudent: false
};                                      
let numbers = [1, 2, 3, 4, 5]; // Array: An ordered list of values.

// Displaying the data types
console.log("Name:", name, "Type:", typeof name);
console.log("Age:", age, "Type:", typeof age);
console.log("Is Student:", isStudent, "Type:", typeof isStudent);
console.log("Null Value:", nullValue, "Type:", typeof nullValue);
console.log("Undefined Value:", undefinedValue, "Type:", typeof undefinedValue);
console.log("Symbol Value:", symbolValue, "Type:", typeof symbolValue);
console.log("Person Object:", person, "Type:", typeof person);
console.log("Numbers Array:", numbers, "Type:", typeof numbers);