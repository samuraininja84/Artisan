// Set the font size of the h2 element to 2vw
document.getElementsByTagName("h2")[0].style.fontSize = "2vw";

// An array to store the text
const texts = [];

// Get the getText function from the server and store the text in the 'texts' array
const generateButton = document.getElementById("generateText");
const displayParagraph = document.getElementById("hiddenText");

// Fetch the text from the file and store it in the 'texts' array
generateButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * texts.length);
  displayParagraph.textContent = texts[randomIndex];
});

// Function to toggle the 'active' class on the popup overlay
function togglePopup() {
  var popup = document.getElementById("popupOverlay");
  popup.classList.toggle("active");
}

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

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  alert("Opened side navigation");
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
  alert("Closed side navigation");
}