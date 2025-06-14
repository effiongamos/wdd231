document.getElementById("newsletter-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const emailInput = document.getElementById("email");
  const successMsg = document.getElementById("newsletter-success");

  if (emailInput.checkValidity()) {
    successMsg.textContent = "Thank you for subscribing!";
    successMsg.classList.add("show");
    emailInput.value = "";
  } else {
    successMsg.textContent = "Please enter a valid email address.";
    successMsg.classList.add("show");
  }
});
