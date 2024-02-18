// Define correct email and password constants
const CORRECT_EMAIL = 'deveraalexandra593@gmail.com';
const CORRECT_PASSWORD = 'Jailex224';

// Get the toggle password view button
const togglePassViewBtn = document.getElementById('togglePasswordView');

// Add an event listener to the toggle password view button
togglePassViewBtn.addEventListener('click', () => {
  // Get the password input field
  const passwordInput = document.getElementById('password');

  // Get the password toggle view indicator
  const passwordToggleView = document.getElementById('passwordViewIndicator');

  // Remove any previous password toggle view classes
  passwordToggleView.classList.remove('bi-eye-slash-fill', 'bi-eye-fill', 'bi-eye');

  // Check if the password input field is currently a password field
  if (passwordInput.type === 'password') {
    // Change the password input field to a text field
    passwordInput.type = 'text';

    // Add an eye-slash icon to the password toggle view indicator
    passwordToggleView.classList.add('bi-eye-slash-fill');
  } else {
    // Change the password input field back to a password field
    passwordInput.type = 'password';

    // Add an eye icon to the password toggle view indicator
    passwordToggleView.classList.add('bi-eye-fill');
  }
})

// If on the index page, handle login form submission
if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
  // Get the login form
  const loginform = document.getElementById("loginform");

  // Add an event listener to the login form
  loginform.addEventListener("submit", (e) => {
    // Prevent the form from submitting by default
    e.preventDefault();

    // Get the username and password input fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the entered username and password match the correct credentials
    if (username === CORRECT_EMAIL && password === CORRECT_PASSWORD) {
      // Redirect to the profile page if the credentials are correct
      window.location.href = "profile.html";
    } else {
      // Show an alert if the entered username or password is incorrect
      alert("Incorrect username or password. Please try again.");

      // Clear the password input field
      document.getElementById("password").value = "";
    }
  })
}

// If on the signup page, handle signup form submission
if (window.location.pathname === '/signup.html' || window.location.pathname === '/signup') {
  // Get the signup form
  const signupform = document.getElementById("signupform");

  // Add an event listener to the signup form
  signupform.addEventListener("submit", (e) => {
    // Prevent the form from submitting by default
    e.preventDefault();

    // Redirect to the login page when signing up
    window.location.href = "index.html";
  })
}
