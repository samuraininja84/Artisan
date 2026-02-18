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
function togglePopup() 
{
  var popup = document.getElementById("popupOverlay");
  popup.classList.toggle("active");
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleTopNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Intersection Observer to highlight the active section in the navigation menu
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link');

    const options = {
        root: null, // observe intersections with the viewport
        rootMargin: '0px',
        threshold: 0.5 // trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove 'active' class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Add 'active' class to the corresponding link
                const currentSectionId = entry.target.id;
                const correspondingLink = document.querySelector(`.nav-link[href="#${currentSectionId}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }, options);

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
});
