document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const phoneNumber = document.getElementById("phone-number").value;
  const pinNumber = document.getElementById("pin-number").value;
  if (phoneNumber === "01781131905" && pinNumber === "811319") {
    window.location.href = "/asset/home.html";
  } else {
    alert("Wrong! Phone Number or Pin");
  }
});
