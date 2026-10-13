let fruits = ["apple", "mango", "orange"];
let result = fruits.push("banana");
console.log("push:", fruits);

let p = fruits.pop(3);
console.log("pop:",fruits);

let unshift = fruits.unshift("graphs");
console.log("unshift:",fruits);

let shift = fruits.shift(0);
console.log("shift:",fruits);

let slice = fruits.slice(2);
console.log("slice:",slice);

let numbers = [1,2,3,4,5];
let splice = numbers.splice(1,4,5);
console.log("splice:",numbers);

let nums=[1,2,3,4,5,6];
let index = nums.indexOf(6);
console.log("index:",index);

let num = [1,2,3,4,5];
let map = num.map(num => num * 2);
console.log("map:",map);

let even = numbers.filter(num => num % 2 == 0);
console.log("Even Numbers:", even);


