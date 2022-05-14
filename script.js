//login button event hendler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    console.log("amake click marce.");
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";

})

//deposit button event hendler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    const depositNumber = getInputNumber("depositAmount");


    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    document.getElementById("depositAmonut").value = "";
})

//withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");
    console.log(withdrawAmount);
updateSpanText("currentWithdraw", withdrawNumber);
updateSpanText("currentBalance", -1* withdrawNumber);

document.getElementById("withdrawAmount").value="";


})

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}



function updateSpanText(id, depositNumber) {
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}