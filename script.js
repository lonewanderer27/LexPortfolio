const CORRECT_EMAIL = 'deveraalexandra593@gmail.com';
const CORRECT_PASSWORD = 'Jailex224';

const togglePassViewBtn = document.getElementById('togglePasswordView');

togglePassViewBtn.addEventListener('click', () => {
  // Get the password input field
  const passwordInput = document.getElementById('password');

  // Get the password toggle view indicator
  const passwordToggleView = document.getElementById('passwordViewIndicator');

  // Remove the password toggle view indicator class
  passwordToggleView.classList.remove('bi-eye-slash-fill', 'bi-eye-fill', 'bi-eye');

  // Check if the password input field is a password field
  if (passwordInput.type === 'password') {
    // Change the password input field to a text field
    passwordInput.type = 'text';

    // Add an eye-slash icon to the password toggle view indicator
    passwordToggleView.classList.add('bi-eye-slash-fill');
  } else {
    // Change the password input field to a password field
    passwordInput.type = 'password';

    // Add an eye icon to the password toggle view indicator
    passwordToggleView.classList.add('bi-eye-fill');
  }
})

// Get the login form if we're on index.html
if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
  const loginform = document.getElementById("loginform")
  loginform.addEventListener("submit", (e) => {
    // Prevent the form from submitting
    e.preventDefault();

    // get the username and password input fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username and password are correct
    if (username === CORRECT_EMAIL && password === CORRECT_PASSWORD) {
      // Redirect to the profile.html
      window.location.href = "profile.html";
    } else {
      // Show an alert if the username or password is incorrect
      alert("Incorrect username or password. Please try again.");

      // Clear the password input field
      document.getElementById("password").value = "";
    }
  })
}

// Get the signup form if we're on signup.html
if (window.location.pathname === '/signup.html' || window.location.pathname === '/signup') {
  const signupform = document.getElementById("signupform")
  signupform.addEventListener("submit", (e) => {
    // Prevent the form from submitting
    e.preventDefault();

    // redirect to the login page
    window.location.href = "index.html";
  })
}
