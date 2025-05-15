const successBtn = document.querySelector("#success");
const warningBtn = document.querySelector("#warning");
const errorBtn = document.querySelector("#error");

const successMessage = document.querySelector(".success-message");
const warningMessage = document.querySelector(".warning-message");
const errorMessage = document.querySelector(".error-message");

const buttons = document.querySelectorAll(".btn");

successBtn.addEventListener("click", () => {
    successMessage.classList.add("active");
    setTimeout(() => {
        successMessage.classList.remove("active");
    }, 5000);
});

warningBtn.addEventListener("click", () => {
    warningMessage.classList.add("active");
    setTimeout(() => {
        warningMessage.classList.remove("active");
    }, 5000);
});

errorBtn.addEventListener("click", () => {
    errorMessage.classList.add("active");
    setTimeout(() => {
        errorMessage.classList.remove("active");
    }, 5000);
});

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.classList.remove("active");
    });
});