const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  
};

getSumBtn.addEventListener("click", getSum);


// Select all prices
let prices = document.querySelectorAll(".prices");

let total = 0;

// Calculate total dynamically
prices.forEach(function(price) {
    total += Number(price.innerText);
});

// Select table
let table = document.querySelector("#groceryTable");

// Create new row
let newRow = document.createElement("tr");

// Create new cell
let newCell = document.createElement("td");

// Span across 2 columns
newCell.colSpan = 2;

// Add total text
newCell.innerText = "Total Price: " + total;

// Append cell to row
newRow.appendChild(newCell);

// Append row to table
table.appendChild(newRow);


