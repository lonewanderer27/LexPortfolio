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