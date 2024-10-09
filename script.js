// script.js

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Collect form data
    const formData = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        mobile: document.getElementById('mobile').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
    };

    // Optional: Log form data to the console (for testing)
    console.log('Form Submitted:', formData);

    // Reset the form
    this.reset();

    // Notify the user
    alert('Thank you for contacting us, ' + formData.first_name + '!');
});
