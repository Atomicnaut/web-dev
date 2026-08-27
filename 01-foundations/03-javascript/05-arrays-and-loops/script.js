// Arrays

// declaration
let fruits = ["apple", "orange", "banana"];
console.log(fruits[0], fruits.length, fruits.at(-1));

// methods
// push
fruits.push("grape");
console.log(fruits);

// pop
fruits.pop();
console.log(fruits);

// unshift
fruits.unshift("grape");
console.log(fruits);

// shift
fruits.shift();
console.log(fruits);

// join
console.log(fruits.join(" - "));

// Loops

// for loops
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// for of loops
for (const fruit of fruits) {
	console.log(fruit);
}

// while loop
let i = 0;
while (i < 3) {
	console.log(i);
	i++;
}

// do while loop
let x = 0;
do {
	console.log(x);
	x++;
} while (x < 3);

// continue
for (let i = 0; i < 10; i++) {
	// if true, skip the remaining part of the body
	if (i % 2 == 0) continue;
	console.log(i);
}

// Assignment
console.log(`Assignment Starts Here`);
const helloWorld = function () {
	return "Hello, World!";
};
console.log(helloWorld());

// Write a function that simply repeats the string a given number of times
function repeatString(word, times) {
	if (times < 0) return "ERROR";
	let string = "";
	for (let i = 0; i < times; i++) {
		string += word;
	}
	return string;
}
console.log(repeatString("hello", 3));

// Write a function called `reverseString` that returns its input, reversed
function reverseString(str) {
	return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// Implement a function that takes an array and some other arguments then removes the other arguments from that array
function removeFromArray(arr, ...args) {
	return arr.filter((val) => !args.includes(val));
}
console.log(removeFromArray([1, 2, 3, 4], 1, 3));

// Implement a function that takes 2 integers and returns the sum of every number between(and including) them
function sumAll(min, max) {
	if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
	if (min < 0 || max < 0) return "ERROR";
	if (min > max) {
		const temp = min;
		min = max;
		max = temp;
	}

	let sum = 0;
	for (let i = min; i <= max; i++) {
		sum += i;
	}
	return sum;
}
console.log(sumAll(4, 1));

// Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:
// Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years)
function leapYears(year) {
	return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
console.log(leapYears(2024));

// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
// convertToCelsius(32) // fahrenheit to celsius, should return 0
// convertToFahrenheit(0) // celsius to fahrenheit, should return 32
// Because we are human, we want the result temperature to be rounded to one decimal place: i.e., `convertToCelsius(100)` should return `37.8` and not `37.77777777777778`
function convertToCelsius(fahrenheit) {
	return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
}
console.log(convertToCelsius(87));
function convertToFahrenheit(celsius) {
	return Math.round((celsius * (9 / 5) + 32) * 10) / 10;
}
console.log(convertToFahrenheit(7));
