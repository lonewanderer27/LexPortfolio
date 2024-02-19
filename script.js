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
