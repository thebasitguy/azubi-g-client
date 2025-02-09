// Get elements
const loginButton = document.getElementById("openLogin");
const loginModal = document.getElementById("loginModal");
const closeLogin = document.getElementById("closeLogin");
const openForgotPassword = document.getElementById("openForgotPassword");
const backToLogin = document.getElementById("backToLogin");
const loginForm = document.getElementById("loginForm");
const forgotPasswordForm = document.getElementById("forgotPasswordForm");

// Open modal when login button is clicked
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  
  // Show login modal
  loginModal.style.display = "block";
  loginForm.style.display = "block"; // Ensure login form is visible
  forgotPasswordForm.style.display = "none"; // Hide forgot password form
});

// Close modal when close button is clicked
closeLogin.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Close modal when clicking outside of it
document.addEventListener("click", (e) => {
  if (e.target !== loginButton && e.target !== loginModal && !loginModal.contains(e.target)) {
    loginModal.style.display = "none";
  }
});

// Open Forgot Password Form
openForgotPassword.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none"; // Hide login form
  forgotPasswordForm.style.display = "block"; // Show forgot password form
});

// Back to Login
backToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "block"; // Show login form
  forgotPasswordForm.style.display = "none"; // Hide forgot password form
});
