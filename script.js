const category = document.getElementById("category");
const amount = document.getElementById("amount");
const date = document.getElementById("date");
const addBtn = document.getElementById("add");
const tableBody = document.getElementById("table-body");
const total = document.getElementById("total");
let runningTotal = 0;


addBtn.addEventListener("click",function(){
    if (category.value.trim() === "" || amount.value.trim() === "" || date.value.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    const amountValue = parseFloat(amount.value);

    if(isNaN(amountValue)||amountValue<=0){
        alert("Please enter a valid amount");
        return;
    }

    let row = document.createElement("tr");
    let column1 = document.createElement("td");
    column1.innerHTML = category.value;
    let column2 = document.createElement("td");
    column2.innerHTML = amount.value;
    let column3 = document.createElement("td");
    column3.innerHTML = date.value;
    let column4 = document.createElement("td");
    let delBtn = document.createElement("button");
    delBtn.innerHTML = "Delete";
    delBtn.addEventListener("click",()=>{
        row.remove();
        runningTotal -= amountValue;
        updateTotal()

    });
    column4.appendChild(delBtn)

    row.appendChild(column1);
    row.appendChild(column2);
    row.appendChild(column3);
    row.appendChild(column4);

    tableBody.appendChild(row);

    runningTotal += amountValue;
    
    updateTotal()


    category.value = "";
    amount.value = "";
    date.value = ""

    


})

function updateTotal(){
    const totalRow = document.getElementById("t-row");
    const tableCell = totalRow.querySelector("#t-cell");
    tableCell.innerHTML = runningTotal.toFixed(2);
}