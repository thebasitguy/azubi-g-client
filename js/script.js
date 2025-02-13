// Get elements
const loginButton = document.getElementById("openLogin");
const loginModal = document.getElementById("loginModal");
const closeLogin = document.getElementById("closeLogin");

const openForgotPassword = document.getElementById("openForgotPassword");
const forgotPasswordForm = document.getElementById("forgotPasswordForm");
const loginForm = document.getElementById("loginForm");

const backToLogin = document.getElementById("backToLogin");

const openResetButton = document.getElementById("openReset");
const resetModal = document.getElementById("resetModal");
const closeReset = document.getElementById("closeReset");

const openSignup = document.getElementById("openSignup");
const signupModal = document.getElementById("signupModal");
const closeSignup = document.getElementById("closeSignup");

const backToLoginFromSignup = document.getElementById("backToLoginFromSignup");
const openSignupFromReset = document.getElementById("openSignupFromReset");

const profileDropdown = document.getElementById("profileDropdown");
const profileInfo = document.getElementById("profileInfo");

const modalLoginButton = document.getElementById("modalLoginButton");

// Open login modal
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  openModal(loginModal);
  loginForm.style.display = "block";
  forgotPasswordForm.style.display = "none";
});

// Close login modal
closeLogin.addEventListener("click", () => closeModal(loginModal));

// Open Forgot Password Form
openForgotPassword.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  forgotPasswordForm.style.display = "block";
});

// Back to Login
backToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "block";
  forgotPasswordForm.style.display = "none";
});

// Open Sign Up Modal
openSignup.addEventListener("click", (e) => {
  e.preventDefault();
  closeModal(loginModal);
  openModal(signupModal);
});

// Close Sign Up Modal
closeSignup.addEventListener("click", () => closeModal(signupModal));

// Back to Login from Sign Up
backToLoginFromSignup.addEventListener("click", (e) => {
  e.preventDefault();
  closeModal(signupModal);
  openModal(loginModal);
});

// Open Sign Up from Reset Modal
openSignupFromReset.addEventListener("click", (e) => {
  e.preventDefault();
  closeModal(resetModal);
  openModal(signupModal);
});

// Open Reset Password Modal
openResetButton.addEventListener("click", (e) => {
  e.preventDefault();
  closeModal(forgotPasswordForm);
  openModal(resetModal);
});

// Close Reset Password Modal
closeReset.addEventListener("click", () => closeModal(resetModal));

// Handle Login Button Click in Modal
modalLoginButton.addEventListener("click", (e) => {
  e.preventDefault();

  // Simulate login success
  const isLoggedIn = true; // Replace with actual login logic

  if (isLoggedIn) {
    closeModal(loginModal);
    loginButton.style.display = "none";
    profileDropdown.style.display = "flex";
  } else {
    alert("Login failed. Please check your credentials.");
  }
});

// Toggle Dropdown Menu
profileInfo.addEventListener("click", () => {
  const dropdownMenu = document.querySelector(".dropdown__menu");
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

// Close Dropdown Menu When Clicking Outside
document.addEventListener("click", (e) => {
  if (!profileDropdown.contains(e.target)) {
    const dropdownMenu = document.querySelector(".dropdown__menu");
    dropdownMenu.style.display = "none";
  }
});

// Helper functions
function openModal(modal) {
  modal.style.display = "block";
}

function closeModal(modal) {
  modal.style.display = "none";
}