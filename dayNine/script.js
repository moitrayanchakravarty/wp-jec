// Function to validate the form fields
function validateForm() {
    // Get input values
    const name = document.getElementById("name").value.trim();
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expiryMonth = document.getElementById("expiryMonth").value.trim();
    const expiryYear = document.getElementById("expiryYear").value.trim();

    // 1. Check if name field is not blank
    if (name === "") {
        alert("Name field cannot be blank.");
        return false;
    }

    // 2. Check if card number has exactly 16 digits
    const cardRegex = /^\d{16}$/;
    if (!cardRegex.test(cardNumber)) {
        alert("Card number must be exactly 16 digits.");
        return false;
    }

    // 3. Check if expiry month is between 1 and 12
    const month = parseInt(expiryMonth, 10);
    if (isNaN(month) || month < 1 || month > 12) {
        alert("Expiry month must be a number between 1 and 12.");
        return false;
    }

    // 4. Check if expiry year has exactly 2 digits
    const yearRegex = /^\d{2}$/;
    if (!yearRegex.test(expiryYear)) {
        alert("Expiry year must be exactly 2 digits.");
        return false;
    }

    // If all checks pass
    alert("Form submitted successfully!");
    return true;
}
