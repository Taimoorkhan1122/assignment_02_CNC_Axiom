//DOM api calls
const ass1 = document.getElementById("assignment-1");
const ass2 = document.getElementById("assignment-2");
const ass3 = document.getElementById("assignment-3");
const ass4 = document.getElementById("assignment-4");
const ass5 = document.getElementById("assignment-5");
const ass6 = document.getElementById("assignment-6");
const ass7 = document.getElementById("assignment-7");

// functions here
// Task 1
function greet() {
  let name = prompt("Enter your name");
  const greeting = `Welcome Mr.${name}`;
  alert(greeting);
}

// Task 2
function countLetters() {
  let input = prompt("Enter a string");
  input.trim();
  alert(input.length);
}

// Task 3
function removeWhiteSpace() {
  let input = prompt("Enter Some strings with spaces");
  let newStr = "";
  for (var i = 0; i < input.length; i++) {
    let trimmed = input[i].trim();
    newStr += trimmed;
  }
  alert(newStr);
}

// Task 4
function task4() {
  let paraEl = ass4.parentElement;
  paraEl.innerHTML +=
    "<p><strong>Result:</strong> The 1_#name and #name are incorrect</p>";
}
// Event listners
ass1.addEventListener("click", () => greet());
ass2.addEventListener("click", () => countLetters());
ass3.addEventListener("click", () => removeWhiteSpace());
ass4.addEventListener("click", () => task4());
