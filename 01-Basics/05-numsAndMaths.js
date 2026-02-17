//Math.randon //Math.floor
//Math.ceil
//Math.round

const randomNumber = Math.random() * 10;
console.log(randomNumber);

const roundedDown = Math.floor(randomNumber);
console.log(roundedDown);

const roundedUp = Math.ceil(randomNumber);
console.log(roundedUp);

const rounded = Math.round(randomNumber);
console.log(rounded);

//Math.max and Math.min
const max = Math.max(1, 5, 3, 9, 2);
console.log(max);

const min = Math.min(1, 5, 3, 9, 2);
console.log(min);

//Math.pow
const power = Math.pow(2, 3);
console.log(power);

//Math.sqrt
const squareRoot = Math.sqrt(16);
console.log(squareRoot);

//Math.abs
const absoluteValue = Math.abs(-5);
console.log(absoluteValue);

//Math.PI
console.log(Math.PI);

//Math.random() can be used to generate a random number between 0 and 1. To generate a random number between a specific range, we can use the following formula:
//Math.random() * (max - min) + min

const min1 = 1;
const max1 = 10;
const randomInRange = Math.random() * (max1 - min1) + min1;
console.log(randomInRange);