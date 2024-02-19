// Get the signup form
const signupform = document.getElementById("signupform");

// Add an event listener to the signup form
signupform.addEventListener("submit", (e) => {
    // Prevent the form from submitting by default
    e.preventDefault();

    // Redirect to the login page when signing up
    window.location.href = "index.html";
})