// Functions

// function declaration
function showMessage() {
	console.log("Hello World!");
}
showMessage();
// A Function Declaration can be called earlier than it is defined.
// As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.

// scope
function showMessage1() {
	let message = "Hello, I'm JavaScript!"; // local variable
	console.log(message);
}
showMessage1();
// console.log(message); // <-- Error! The variable is local to the function
let userName = "Ben";
function showMessage2() {
	let message = "Hello, " + userName;
	console.log(message);
}
showMessage2();

// parameters (default parameters)
function showMessage3(from, text = "Hello world!") {
	console.log(`${from}: ${text}`);
}
showMessage3("Blue", `Where's my food`);
showMessage3("Ben");

// return
function sum(a, b) {
	return a + b;
}
console.log(sum(3, 7));

// function expression
let product = function (a, b) {
	return a * b;
};
// A Function Expression is created when the execution reaches it and is usable only from that moment.

// arrow functions
let subtract = (a, b) => {
	return b - a;
};
// one line function
let double = (n) => n * 2;
console.log(subtract(4, 7), double(7));

// Assignment
console.log(`Assignment Starts Here`);
// 1. Write a function called add7 that takes one number and returns that number + 7
function add7(num) {
	return num + 7;
}
console.log(add7(7));

// 2. Write a function called multiply that takes 2 numbers and returns their product
function multiply(a, b) {
	return a * b;
}
console.log(multiply(7, 3));

// 3. Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh
function capitalize(str) {
	return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
}
console.log(capitalize("tEsT"));

// 4. Write a function called lastLetter that takes a string and returns the very last letter of that string:
function lastLetter(str) {
	return str.at(-1);
}
console.log(lastLetter("atomicnaut"));
