// Problem Solving

// Solving Fizz Buzz
// Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz

// Planning
// Does the program have an interface -- no, only user interaction is a prompt
// Inputs -- user prompt for a number
// Desired output -- list of numbers from 1 to the number entered. But each number divisible by 3 will output Fizz, 5 - Buzz, and 3 and 5 - FizzBuzz

// Pseudocode
// When a user inputs a number
// Loop from 1 to the entered number
// If the current number is divisible by 3 then print "Fizz"
// If the current number is divisible by 5 then print "Buzz"
// If the current number is divisible by 3 and 5 then print "FizzBuzz", otherwise print the current number

// Divide and Conquer
// user inputs a number
let answer = parseInt(
	prompt(`Please enter the number you would like to FizzBuzz up to: `)
);
// // Loop from 1 to the entered number
// for (let i = 1; i <= answer; i++) {
// 	console.log(i);
// }
// // If the current number is divisible by 3 then print "Fizz"
// for (let i = 1; i <= answer; i++) {
// 	if (i % 3 === 0) {
// 		console.log(`Fizz`);
// 	} else {
// 		console.log(i);
// 	}
// }
// // If the current number is divisible by 5 then print "Buzz"
// for (let i = 1; i <= answer; i++) {
// 	if (i % 3 === 0) {
// 		console.log(`Fizz`);
// 	} else if (i % 5 === 0) {
// 		console.log(`Buzz`);
// 	} else {
// 		console.log(i);
// 	}
// }
// If the current number is divisible by 3 and 5 then print "FizzBuzz", otherwise print the current number
for (let i = 1; i <= answer; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(`FizzBuzz`);
	} else if (i % 3 === 0) {
		console.log(`Fizz`);
	} else if (i % 5 === 0) {
		console.log(`Buzz`);
	} else {
		console.log(i);
	}
}
