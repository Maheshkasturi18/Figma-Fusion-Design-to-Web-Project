const formOpen = document.querySelector("#form-open"); // btn1
const sign = document.querySelector("#sign"); // btn2
const login = document.querySelector(".login");
const signin = document.querySelector(".sign-in");
const formContainer = document.querySelector(".form-container");
const cancelbtn = document.getElementById("close");
const cancelbtn2 = document.getElementById("close-form");

function showLoginForm() {
  login.classList.add("show");
  signin.classList.remove("show");
}

function showSignInForm() {
  signin.classList.add("show");
  login.classList.remove("show");
}

// Event listener for opening the login form
formOpen.addEventListener("click", showLoginForm);

// Event listener for opening the sign-in form
sign.addEventListener("click", showSignInForm);

// Event listener for clicking the cancel button

cancelbtn.addEventListener("click", () => {
  login.classList.remove("show");
});

function hideSignInForm() {
  console.warn("Cancel button clicked");
  signin.classList.remove("show");
}

cancelbtn2.addEventListener("click", hideSignInForm);

// change text

function changeText(idElement) {
  var element = document.getElementById("element" + idElement);
  if (idElement >= 1 && idElement <= 4) {
    // Checks ID Range
    element.innerHTML = element.innerHTML === "Follow" ? "Followed" : "Follow";
  }
}
