   

   
   
   
let age = 18;    
if (age >= 18) {
  document.getElementById("ageResult").innerText = "You are an adult ✅";
} else {
  document.getElementById("ageResult").innerText = "You are a minor ❌";
}

   
   
   

   
function calculateTotal(price, qty) {
  let total = price * qty;
  document.getElementById("totalResult").innerText = "Total Price: $" + total;
}

   
function toggleMessage() {
  let text = document.getElementById("toggleText");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

   
   
   

   
let list = document.getElementById("numberList");
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = "Number " + i;
  list.appendChild(li);
}

   
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}

   
   
   

   
document.getElementById("changeColorBtn").addEventListener("click", function () {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

   
document.getElementById("addItemBtn").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item added!";
  document.getElementById("items").appendChild(newItem);
});

   
document.getElementById("items").innerHTML += "<li>Initial Item</li>";
