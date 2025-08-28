// 🚀 Assignment: JavaScript Fundamentals

// ----------------------
// Part 1: Variables & Conditionals
// ----------------------
let age = 18; // variable declaration
if (age >= 18) {
  document.getElementById("ageResult").innerText = "You are an adult ✅";
} else {
  document.getElementById("ageResult").innerText = "You are a minor ❌";
}

// ----------------------
// Part 2: Functions
// ----------------------

// Function 1: Calculate total price
function calculateTotal(price, qty) {
  let total = price * qty;
  document.getElementById("totalResult").innerText = "Total Price: $" + total;
}

// Function 2: Toggle message display
function toggleMessage() {
  let text = document.getElementById("toggleText");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

// ----------------------
// Part 3: Loops
// ----------------------

// Example 1: For loop → generate a list of numbers
let list = document.getElementById("numberList");
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = "Number " + i;
  list.appendChild(li);
}

// Example 2: While loop → countdown
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}

// ----------------------
// Part 4: DOM Manipulation
// ----------------------

// Example 1: Change background color on button click
document.getElementById("changeColorBtn").addEventListener("click", function () {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

// Example 2: Add list items dynamically
document.getElementById("addItemBtn").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item added!";
  document.getElementById("items").appendChild(newItem);
});

// Example 3: Update text content dynamically
document.getElementById("items").innerHTML += "<li>Initial Item</li>";
