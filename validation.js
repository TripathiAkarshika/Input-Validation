// Sanitize function to remove potentially dangerous characters
function sanitizeInput(input) {
    return input.replace(/[<>]/g, ""); // Remove < and >
}
// Attach an event listener to the form submission
document.getElementById("secureForm").addEventListener("submit", function (e) {
    e.preventDefault();
    // Get user input from form fields
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    // Sanitize user input to prevent XSS
    firstName = sanitizeInput(firstName);
    lastName = sanitizeInput(lastName);
    email = sanitizeInput(email);
    password = sanitizeInput(password);
    confirmPassword = sanitizeInput(confirmPassword);
    // Validate fields
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("All fields are required.");
        return;
    }
    // Validate email format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format. Please enter your correct email address.");
        return;
    }
    // Validate password match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    // If everything is valid, display a success message
    alert("Great! Form submitted successfully!");
});