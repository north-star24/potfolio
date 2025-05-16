// Contact form validation
function validateContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Name validation
        const name = document.getElementById('name');
        const nameError = document.getElementById('name-error');
        if (name.value.trim() === '') {
            nameError.textContent = 'Name is required';
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }
        
        // Email validation
        const email = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email.value.trim() === '') {
            emailError.textContent = 'Email is required';
            emailError.style.display = 'block';
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }
        
        // Phone validation (optional)
        const phone = document.getElementById('phone');
        const phoneError = document.getElementById('phone-error');
        const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        
        if (phone.value.trim() !== '' && !phoneRegex.test(phone.value)) {
            phoneError.textContent = 'Please use format: 123-456-7890';
            phoneError.style.display = 'block';
            isValid = false;
        } else {
            phoneError.style.display = 'none';
        }
        
        // Message validation
        const message = document.getElementById('message');
        const messageError = document.getElementById('message-error');
        if (message.value.trim() === '') {
            messageError.textContent = 'Message is required';
            messageError.style.display = 'block';
            isValid = false;
        } else {
            messageError.style.display = 'none';
        }
        
        // If form is valid, submit it
        if (isValid) {
            // In a real application, you would submit the form to a server here
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        }
    });
}

// Survey form validation
function validateSurveyForm() {
    const form = document.getElementById('surveyForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Name validation
        const name = document.getElementById('survey-name');
        if (name.value.trim() === '') {
            isValid = false;
            alert('Please enter your name');
            return;
        }
        
        // Consent validation
        const consent = document.getElementById('consent');
        if (!consent.checked) {
            isValid = false;
            alert('You must agree to the terms to submit the survey');
            return;
        }
        
        // Rating validation
        const rating = document.getElementById('rating');
        if (rating.value === '') {
            isValid = false;
            alert('Please select a rating');
            return;
        }
        
        // If form is valid, submit it
        if (isValid) {
            // In a real application, you would submit the form to a server here
            alert('Thank you for your feedback!');
            form.reset();
        }
    });
}

// Initialize form validations
document.addEventListener('DOMContentLoaded', () => {
    validateContactForm();
    validateSurveyForm();
});