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

// Get the open and close buttons for the side navigation
var toggleButton = document.getElementById("toggleButton");
var closeButton = document.getElementById("closeButton");
var sideNav = document.getElementById("mySidenav");

const size = 250; 

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  sideNav.style.width = size + "px";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  sideNav.style.width = "0";
  document.body.style.backgroundColor = "white";
}

/* Toggle the side navigation open and closed */
function toggleNav() {
    if (sideNav.style.width === size + "px") {
        closeNav();
    } else {
        openNav();
    }
}

// Event listeners for opening and closing the side navigation
toggleButton.addEventListener("click", toggleNav);
closeButton.addEventListener("click", closeNav);

// Function to toggle the 'active' class on the popup overlay
function togglePopup() {
  var popup = document.getElementById("popupOverlay");
  popup.classList.toggle("active");
}