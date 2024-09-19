// add money
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const amount = document.getElementById("add-amount").value;
    const addAmount = parseFloat(amount);
    const balance = document.getElementById("current-balance").innerText;
    const initialBalance = parseFloat(balance);
    const pinNumber = document.getElementById("add-pin-number").value;

    if (pinNumber === "811319") {
      const currentBalance = initialBalance + addAmount;
      document.getElementById("current-balance").innerText = currentBalance;
    } else {
      alert("Something went wrong! Try again");
    }
  });

// user action
const showBtn = document.getElementById("show-add-btn");
const outBtn = document.getElementById("show-out-btn");
const showAddContainer = document.getElementById("add-money-container");
const showOutContainer = document.getElementById("out-money-container");

showBtn.addEventListener("click", function () {
  showOutContainer.classList.add("hidden");
  showAddContainer.classList.remove("hidden");
});

outBtn.addEventListener("click", function () {
  showOutContainer.classList.remove("hidden");
  showAddContainer.classList.add("hidden");
});

// cash out

document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const amount = document.getElementById("cash-out-amount").value;
  const outAmount = parseFloat(amount);
  const balance = document.getElementById("current-balance").innerText;
  const initialBalance = parseFloat(balance);
  const pinNumber = document.getElementById("cash-out-pin-number").value;
  if (outAmount > initialBalance) {
    alert("Oi Mama Na plz! Insufficient Balance");
  } else if (pinNumber === "811319") {
    const currentBalance = initialBalance - outAmount;
    document.getElementById("current-balance").innerText = currentBalance;
  } else {
    alert("Something went wrong! Try again");
  }
});
