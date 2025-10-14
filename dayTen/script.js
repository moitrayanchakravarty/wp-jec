// Get references to form inputs and button
const userId = document.getElementById("userId");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submitBtn");

// Function to check input conditions
function validateForm() {
    // Check if all fields have text and passwords match
    if (
        userId.value.trim() !== "" &&
        password.value.trim() !== "" &&
        confirmPassword.value.trim() !== "" &&
        password.value === confirmPassword.value
    ) {
        submitBtn.disabled = false; // Enable submit button
    } else {
        submitBtn.disabled = true; // Disable submit button
    }
}

// Add event listeners to trigger validation
userId.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);
confirmPassword.addEventListener("input", validateForm);
