// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// // This script will handle the background hover effect
// document.body.addEventListener('mousemove', function(e) {
//     const x = e.clientX;
//     const y = e.clientY;
//     const lightSize = 200; // radius size of the light effect
//     const gradientX = (x / window.innerWidth) * 100;
//     const gradientY = (y / window.innerHeight) * 100;
    
//     document.body.style.background = `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(17, 34, 64, 0.3), #0a192f ${lightSize}px)`;
// });

// JavaScript to add 'sticky-active' class to section headers when they stick
document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll('.section-header');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
            section.classList.add('sticky-active');
        } else {
            section.classList.remove('sticky-active');
        }
    });
});

// // Open modal function
// function openModal(modalId) {
//     document.getElementById(modalId).style.display = "block";
// }

// // Close modal function
// function closeModal(modalId) {
//     document.getElementById(modalId).style.display = "none";
// }

// JavaScript to highlight the nav when a section is clicked
document.querySelectorAll('.custom-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.custom-link.active')?.classList.remove('active');
        this.classList.add('active');
    });
});

// JavaScript to highlight the nav when a section is in view
// Select all sections and the nav links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.custom-link');

// Define the options for the Intersection Observer
const observerOptions = {
    root: null,  // Observe within the viewport
    threshold: 0.3  // 30% of the section must be visible to trigger the active state
};

// Create the Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Get the ID of the section that's currently in view
            const currentSectionId = entry.target.id;

            // Remove the 'active' class from all nav links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' class to the corresponding nav link
            const activeLink = document.querySelector(`.custom-link[href="#${currentSectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, observerOptions);

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});

// Add event listener to handle the bottom of the page
window.addEventListener('scroll', () => {
    // Check if the user is near the bottom of the page
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // Highlight the last section (e.g., "Projects")
        navLinks.forEach(link => link.classList.remove('active'));
        const lastLink = document.querySelector('.custom-link[href="#projects"]');
        if (lastLink) {
            lastLink.classList.add('active');
        }
    }
});



