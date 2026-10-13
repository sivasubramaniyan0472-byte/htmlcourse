
document.addEventListener('DOMContentLoaded', () => {
Js    
// 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a navigation link on mobile
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 2. Contact Form Interactivity & Validation
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page refresh

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            // Simulate successful form submission
            formFeedback.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
            formFeedback.classList.remove('hidden');
            formFeedback.style.color = '#10b981'; // Green success color
            
            contactForm.reset();

            // Hide feedback message after 5 seconds
            setTimeout(() => {
                formFeedback.classList.add('hidden');
            }, 5000);
        } else {
            formFeedback.textContent = 'Please fill out all fields before submitting.';
            formFeedback.classList.remove('hidden');
            formFeedback.style.color = '#ef4444'; // Red error color
        }
    });
});
    