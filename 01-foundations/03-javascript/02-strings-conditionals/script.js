// Strings
const single = "Single quotes";
const double = "Double quotes";
const backtick = `Backtick`;
console.log(single, double, backtick);

// template literal
const user = "Benjamin";
const greeting = `Hello ${user}`;
console.log(greeting);

// multiline
const newline = `One day you finally knew
what you had to do, and began.`;
console.log(newline);

// numbers and strings
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum, myNum);

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2, myNum2);

// Conditionals
// comparisons
console.log(2 > 1, 2 === "2", 2 !== 1);
console.log("z" > "a", "bee" > "be");
console.log(3 >= 3, 4 <= 2);

// logical operators
// || is the or operator
// && is the and operator
// !(variable) is the not operator

// if statements
// A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values
// Other values become true, so they are called “truthy”
if (1) {
	console.log("This is a truthy value");
}
// if / else
if (0) {
	console.log("This is a truthy value");
} else {
	console.log("This is a falsy value");
}
// if / else if
let year = 2023;
if (year === 1987) {
	console.log("Chris was born");
} else if (year === 1988) {
	console.log("Lauren was born");
} else if (year === 2023) {
	console.log("Benjamin was born");
} else {
	console.log("Something else probably happened");
}

// conditional (ternary) operator
let age = 36;
let canVote = age > 21 ? true : false;
console.log(canVote);
let message = age < 3
		? "Hi, baby!"
		: age < 18
		? "Hello!"
		: age < 100
		? "Greetings!"
		: "Wow you are so old!";
console.log(message);
// The purpose of the question mark operator ? is to return one value or another depending on its condition. Please use it for exactly that. Use if when you need to execute different branches of code

// switch statement
let a = 4 + 2;
switch (a) {
	case 3:
		console.log("Too small");
		break;
	case 4:
		console.log("Exactly!");
		break;
	case 5:
	case 6:
	case 7:
		console.log("Too big");
		break;
	default:
		console.log("I don't know such values");
}

// Assignment
console.log("Assignment Starts Here");
// The function below should log the number 2, however it does not, see if you can fix it!
function troubleshooting() {
	const a = 1;
	const b = 1;
	let result;
	// Edit below line
	result = a + b;
	return result;
}
console.log(troubleshooting());

// The code below tells the browser to ask you for a number then if that number is `6`, it returns `true` otherwise it returns `false`
// Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
let number = 12;
function numberChecker() {
	if (number >= 10) {
		return true;
	} else {
		return false;
	}
}
console.log(numberChecker());

// Lets do some math!
// Some rules first:
// Replace the strings to the right of the = with the math expression they describe.
// Do not manually enter the answers to the equations. For example, `const a = 9` would be incorrect as 9 is the answer to the equation you're being asked to write out
const g = 1 + 8; // "one plus eight"
const h = 22 * 3; // "22 times three";
const i = 5 % 4; // "the *remainder* of 5/4";
const j = g - 17; // "the variable 'g' minus 17";
const k = g + h + i + j; // "the sum of the previous four variables";
console.log(g, h, i, j, k);

// After each step, run the code to make sure your code still works!
// If your code fails to run, or you see a "ReferenceError" in the console, review your code and make sure you have completed all of the objectives.
// Don't forget you can put "console.log" anywhere to see what your values are at any time.
// 1. Create 4 variables: firstName, lastName, thisYear, and birthYear
// 2. Create a 5th variable, greeting, that is constructed from the previous 4 (it should contain a greeting with the person's full name and their age)
// 3. Print greeting with console.log
let firstName = "Chris";
let lastName = "Gilbert";
let birthYear = 1987;
let thisYear = 2024;
let fullName = `${firstName} ${lastName}`;
let myAge = thisYear - birthYear;
let greetingMessage = `Hello! My name is ${fullName} and I am ${myAge} years old.`;
console.log(greetingMessage);
