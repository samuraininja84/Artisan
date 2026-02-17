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
