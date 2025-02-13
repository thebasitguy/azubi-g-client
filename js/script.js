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

// Open login modal
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.style.display = "block";
  loginForm.style.display = "block";
  forgotPasswordForm.style.display = "none";
  signupModal.style.display = "none";
});

// Close login modal
closeLogin.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Open Forgot Password Form
openForgotPassword.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  forgotPasswordForm.style.display = "block";
  signupModal.style.display = "none";
});

// Back to Login
backToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "block";
  forgotPasswordForm.style.display = "none";
  signupModal.style.display = "none";
});

// Open Sign Up Modal
openSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.style.display = "none";
  signupModal.style.display = "block";
});

// Close Sign Up Modal
closeSignup.addEventListener("click", () => {
  signupModal.style.display = "none";
});

// Back to Login from Sign Up
backToLoginFromSignup.addEventListener("click", (e) => {
  e.preventDefault();
  signupModal.style.display = "none";
  loginModal.style.display = "block";
});

// Open Sign Up from Reset Modal
openSignupFromReset.addEventListener("click", (e) => {
  e.preventDefault();
  resetModal.style.display = "none";
  signupModal.style.display = "block";
});

// Open Reset Password Modal
openResetButton.addEventListener("click", (e) => {
  e.preventDefault();
  forgotPasswordForm.style.display = "none";
  resetModal.style.display = "block";
});

// Close Reset Password Modal
closeReset.addEventListener("click", () => {
  resetModal.style.display = "none";
});

// Close modals when clicking outside
document.addEventListener("click", (e) => {
  if (!loginModal.contains(e.target) && e.target !== loginButton) {
    loginModal.style.display = "none";
  }

  if (!signupModal.contains(e.target) && e.target !== openSignup) {
    signupModal.style.display = "none";
  }

  if (!resetModal.contains(e.target) && e.target !== openResetButton) {
    resetModal.style.display = "none";
  }
});