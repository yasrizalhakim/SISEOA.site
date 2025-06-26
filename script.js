// Navigation functionality
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
const overlay = document.querySelector('.overlay');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Update active nav link
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
        
        // Show active page
        const pageId = this.getAttribute('data-page');
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
        
        // Close mobile menu if open
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            overlay.classList.remove('active');
        }
        
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
navToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', function() {
    nav.classList.remove('active');
    overlay.classList.remove('active');
});

// Contact form functionality
// const contactForm = document.getElementById('contact-form');

// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Get form values
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const phone = document.getElementById('phone').value;
//         const message = document.getElementById('message').value;
        
//         // In a real implementation, you'd send this data to your server
//         console.log('Form submitted:', { name, email, phone, message });
        
//         // Show success message
//         const formHTML = contactForm.innerHTML;
//         contactForm.innerHTML = `
//             <div class="success-message">
//                 <h3>Thank you for your inquiry!</h3>
//                 <p>We've received your request and will contact you within 24 hours to schedule your free consultation.</p>
//             </div>
//         `;
        
//         // Reset form after 5 seconds (in a real implementation, you might not want to do this)
//         setTimeout(() => {
//             contactForm.innerHTML = formHTML;
//         }, 5000);
//     });
// }
