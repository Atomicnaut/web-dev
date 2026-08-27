console.log("Hello World!");

// Variables
let message;
message = "Hello";
message = "World";
let hello = "Hello World!";
message = hello;
console.log(message);

const myBirthday = "08.19.1987";
console.log(myBirthday);
// myBirthday = "Today"; // Results in an error

// Basic Operators
let x = 1;
x = -x;
console.log(x);

let a = 1,
	b = 3;
console.log(b - a);

// remainder
console.log(5 % 2, 8 % 3, 8 % 4);

// exponentiation
console.log(2 ** 2, 2 ** 3, 2 ** 4);
console.log(4 ** (1 / 2), 27 ** (1 / 3));

// numeric conversion
let apples = "2";
let oranges = "3";
console.log(apples + oranges, +apples + +oranges);

// modify-in-place
let n = 2;
console.log((n += 5), (n *= 2));

// increment / decrement
let counter = 1;
counter++;
console.log(counter);
console.log(counter++, ++counter);
console.log(counter--, --counter);

// Assignment
console.log("Assignment Starts Here");
// 1. Add 2 numbers together! (just type console.log(23 + 97) into your HTML file)
console.log(23 + 97);

// 2. Add a sequence of 6 different numbers together
console.log(1 + 2 + 3 + 4 + 5 + 6);

// 3. Print the value of the following expression: (4 + 6 + 9) / 77
console.log((4 + 6 + 9) / 77);

// 4. Let’s use variables
let aa = 10;
let bb = 7 * aa;
console.log(bb);

// 5. You should be getting the hang of this by now… try this sequence
const MAX = 57;
let actual = MAX - 13;
let percentage = actual / MAX;
console.log(percentage);
