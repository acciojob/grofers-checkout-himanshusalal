const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {

    let prices = document.querySelectorAll(".prices");

    let total = 0;

    prices.forEach(function(price) {
        total += Number(price.innerText);
    });

    let table = document.querySelector("#groceryTable");

    let newRow = document.createElement("tr");

    let newCell = document.createElement("td");

    newCell.colSpan = 2;
    newCell.innerText = "Total Price: " + total;

    newRow.appendChild(newCell);

    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);