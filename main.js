// Toggle Navigation Menu
document.getElementById("menu").addEventListener("click", function () {
    let nav = document.getElementById("list");
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
});

// Handle FAQ Dropdown Selection
document.getElementById("searchInput").addEventListener("change", function () {
    let selectedValue = this.value;

    // Hide all FAQ answers
    document.querySelectorAll(".que").forEach((element) => {
        element.style.display = "none";
    });

    // Show the selected FAQ answer
    switch (selectedValue) {
        case "who":
            document.getElementById("b2").style.display = "block";
            break;
        case "hi":
            document.getElementById("a2").style.display = "block";
            break;
        case "freelance":
            document.getElementById("c2").style.display = "block";
            break;
        case "projects":
            document.getElementById("d2").style.display = "block";
            break;
        case "contact":
            document.getElementById("e2").style.display = "block";
            break;
        case "collab":
            document.getElementById("f2").style.display = "block";
            break;
        case "intern":
            document.getElementById("g2").style.display = "block";
            break;
        default:
            document.getElementById("a2").style.display = "block"; // Default to welcome message
    }
});

// Toggle Dark/Light Mode
let mode = document.querySelector("#mode");
let body = document.querySelector(".slider");
let colorSelect = "light";

mode.addEventListener("click", () => {
    if (colorSelect === "light") {
        body.classList.add("dark");
        body.classList.remove("light");
        colorSelect = "dark";
    } else {
        body.classList.add("light");
        body.classList.remove("dark");
        colorSelect = "light";
    }
});

// Image Slider Functionality
let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    // Handle slide index boundaries
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    // Move the slider
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

// Initialize the slider
showSlide(slideIndex);

// Share Text Functionality
function shareText() {
    let paragraph = document.getElementById("textToShare");
    let text = paragraph.innerText;
    let link = paragraph.querySelector("a") ? paragraph.querySelector("a").href : "";

    let shareContent = text + " " + link;

    // Use Web Share API if supported
    if (navigator.share) {
        navigator.share({
            title: "To share",
            text: shareContent,
        })
            .then(() => {
                console.log("Sharing successful");
            })
            .catch((error) => {
                console.log("Error sharing:", error);
            });
    } else {
        alert("This feature is not supported in your browser.");
    }
    }
setTimeout(function() {
            document.getElementById("mode").style.display = "block"; 
        }, 4000); // 5000 milliseconds = 5 seconds
        
                setTimeout(function() {
            document.getElementById("menu").style.display = "block"; 
        }, 4000); // 5000 milliseconds = 5 seconds
        
                setTimeout(function() {
            document.getElementById("end-space").style.display = "block"; 
        }, 4000); // 5000 milliseconds = 5 seconds
                setTimeout(function() {
            document.getElementById("start").style.display = "none"; 
        }, 4000); // 5000 milliseconds = 5 seconds
