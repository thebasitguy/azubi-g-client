// Get elements
const loginButton = document.getElementById("openLogin");
const loginModal = document.getElementById("loginModal");
const closeLogin = document.getElementById("closeLogin");

// Open modal when login button is clicked
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  
  // Toggle modal visibility
  if (loginModal.style.display === "block") {
    loginModal.style.display = "none";
  } else {
    loginModal.style.display = "block";
  }
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
