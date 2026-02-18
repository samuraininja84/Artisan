// At the top of your script.js file
console.log("JS file loaded successfully!");

// Get all sections and nav links
const sections = document.querySelectorAll('.page-section');
const navLinks = document.querySelectorAll('.nav-link');

// Function to handle scroll events
function onScroll() {
    // Get current scroll position
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Loop through each section to check if it's in the viewport
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60; // Offset for fixed header height
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the current section's link
            const currentLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
            if (currentLink) {
                currentLink.classList.add('active');
            }
        }
    });
}

// Listen for the scroll event
window.addEventListener('scroll', onScroll);

// Call on load to set the initial active link
document.addEventListener('DOMContentLoaded', onScroll);

// Optional: Smooth scrolling for link clicks
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjust offset for smooth scroll
            behavior: 'smooth'
        });
    });
});