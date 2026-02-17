const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[4]);

//push method is used to add an element at the end of the array.
arr.push(6);
console.log(arr);

//pop method is used to remove the last element of the array.
arr.pop();
console.log(arr);

//shift method is used to remove the first element of the array.
arr.shift();
console.log(arr);

//unshift method is used to add an element at the beginning of the array.
arr.unshift(0);
console.log(arr);

//indexOf method is used to find the index of a specific element in the array.
const index = arr.indexOf(3);
console.log(index);

//slice method is used to extract a portion of an array and return it as a new array.
const slicedArray = arr.slice(1, 4);
console.log(slicedArray); 

//splice method is used to add or remove elements from an array.
arr.splice(2, 1);