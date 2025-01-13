// Function to validate login details
function validateLogin() {
    var matricNumber = document.getElementById('matricNumber').value; // Updated ID
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');
    
    // Clear any previous error messages
    errorMessage.innerHTML = '';

    // Matric number validation: Must not be empty
    if (!matricNumber) {
        errorMessage.innerHTML = "Please enter your matric number.";
        return;
    }

    // Password validation: must be at least 8 characters
    if (password.length < 8) {
        errorMessage.innerHTML = "Password must be at least 8 characters long.";
        return;
    }

    // If validation passes, redirect to profile.html
    window.location.href = 'profile.html';
}

