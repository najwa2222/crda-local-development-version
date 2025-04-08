const express = require('express');
const router = express.Router();


// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form data
    const formData = new FormData(event.target);

    // Send a POST request to the backend
    fetch('/login', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Handle successful login
            console.log('Login successful');
        } else {
            // Handle login error
            console.error('Login failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

});
module.exports = router;  
