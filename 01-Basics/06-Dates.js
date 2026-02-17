//dates in js

let date = new Date();
console.log(date);
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toISOString());
console.log(date.toJSON());

let date1 = new Date("2020-01-01");
console.log(date1);

let date2 = new Date(2020, 0, 1); // month is 0-indexed
console.log(date2);

let date3 = new Date(2020, 0, 1, 10, 30, 0); // year, month, day, hours, minutes, seconds
console.log(date3);

//get methods
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

//set methods
date.setFullYear(2021);
date.setMonth(11); // December
date.setDate(25);
date.setHours(12);
date.setMinutes(0);
date.setSeconds(0);
console.log(date);                          