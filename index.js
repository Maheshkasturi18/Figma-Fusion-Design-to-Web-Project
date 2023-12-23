
const formOpen = document.querySelector("#form-open")
const login = document.querySelector(".login")
const formContainer = document.querySelector(".form-container")
const cancelbtn  = document.querySelector(".cancel-btn")
const signinbtn  = document.querySelector(".sign")
const loginbtn  = document.querySelector(".login_form")


formOpen.addEventListener("click", () => login.classList.add("show"));
cancelbtn.addEventListener("click", () => login.classList.remove("show"));


formOpen.addEventListener("click", () => login.classList.add("show")); 
cancelbtn.addEventListener("click", () => login.classList.remove("show"));



// change text

   function changeText(idElement) {
    var element = document.getElementById('element' + idElement);
    if (idElement === 1 || idElement === 2 || idElement === 3 || idElement === 4) {
        if (element.innerHTML === 'Follow') element.innerHTML = 'Followed';
        else {
            element.innerHTML = 'Follow';
        }
    }
}

// signinbtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     formContainer.classList.add("active")
// });
// loginbtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     formContainer.classList.remove("active")
// });