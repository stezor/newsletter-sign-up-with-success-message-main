const newsletterEl = document.getElementById("newsletter-sign-up");
const messageEl = document.getElementById("success-message");
const formEl = document.querySelector("#newsletter-sign-up form");
const dismissBtn = document.querySelector("#success-message button");
const outputEl = document.querySelector("#success-message b");
const formFieldEl = document.querySelector(".form-field");
const feedbackEl = document.querySelector(".form-field span");

function handleDismiss() {
  // dismiss message
  newsletterEl.classList.remove("hide");
  newsletterEl.classList.add("show");
  messageEl.classList.remove("show");
  messageEl.classList.add("hide");
}

dismissBtn.addEventListener("click", handleDismiss);

function handleSubmit(e) {
  e.preventDefault();

  const emailRegex = new RegExp(
    "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$"
  );
  const val = e.target.elements["email"].value;

  if (emailRegex.test(val)) {
    // show success message
    formFieldEl.classList.remove("invalid");
    feedbackEl.innerText = "";
    newsletterEl.classList.remove("show");
    newsletterEl.classList.add("hide");
    messageEl.classList.remove("hide");
    messageEl.classList.add("show");
    outputEl.innerText = val;
    e.target.elements["email"].value = "";
  } else {
    // show error
    formFieldEl.classList.add("invalid");
    feedbackEl.innerText = "Valid email required";
  }
}

formEl.addEventListener("submit", handleSubmit);
