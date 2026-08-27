// DOM Example
const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

// Exercises

// Add a <p> element with red text that says "Hey I'm red"
const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = "red";
container.appendChild(redParagraph);

// Add an <h3> with blue text thats says "I'm a blue h3!"
const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = "blue";
container.appendChild(blueH3);

// Add a <div> with a black border and pink background color with the following elements inside of it:
// Another <h1> that says "I'm in a div"
// A <p> that says "ME TOO!"
const div = document.createElement("div");
const anotherH1 = document.createElement("h1");
const anotherP = document.createElement("p");
div.setAttribute("style", "background-color: pink; border: 1px solid black");
anotherH1.textContent = "I'm in a div";
anotherP.textContent = "ME TOO!";
div.appendChild(anotherH1);
div.appendChild(anotherP);
container.appendChild(div);

// Events
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");
btn.addEventListener("click", (e) => {
	e.target.style.background = "blue";
});
// event listener
const btnTwo = document.querySelector("#btn-two");
btnTwo.addEventListener("click", () => {
	alert("Hello World");
});
// callback event
const btnThree = document.querySelector("#btn-three");
btnThree.addEventListener("click", alertFunction);
function alertFunction() {
	alert("Hello World");
}
