document.getElementById("menu").addEventListener("click", function () {
    let nav = document.getElementById("list");
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
});

document.getElementById("searchInput").addEventListener("change", function () {
    let selectedValue = this.value; 
    
    document.getElementById("a2").style.display = "none";
    document.getElementById("b2").style.display = "none";
    document.getElementById("c2").style.display = "none";
    document.getElementById("d2").style.display = "none";
    document.getElementById("e2").style.display = "none";
    document.getElementById("f2").style.display = "none";
    document.getElementById("g2").style.display = "none";

    if (selectedValue == "who") {
        document.getElementById("b2").style.display ="block";
        
    }
    
    else if (selectedValue == "hi") {
        document.getElementById("a2").style.display = "block"; 
    }
    
    else if (selectedValue == "freelance") {
        document.getElementById("c2").style.display = "block"; 
    }
    
    
    else if (selectedValue == "projects") {
        document.getElementById("d2").style.display = "block"; 
    }
    
    else if (selectedValue == "contact") {
        document.getElementById("e2").style.display = "block"; 
    }
    
    else if (selectedValue == "collab") {
        document.getElementById("f2").style.display = "block"; 
    }
    
    else if (selectedValue == "intern") {
        document.getElementById("g2").style.display = "block"; 
    }
    
});


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


let slideIndex = 0;

   function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
            if (index >= totalSlides) {
                slideIndex = 0;
            } else if (index < 0) {
                slideIndex = totalSlides - 1;
            } else {
                slideIndex = index;
            }
            slides.style.transform = `translateX(${-slideIndex * 100}%)`;
        }

   function nextSlide() {
    showSlide(slideIndex + 1);
        }

  function prevSlide() {
  showSlide(slideIndex - 1);
        }

    showSlide(slideIndex); // Initial display
        
        
    function shareText() {
        let paragraph = document.getElementById("textToShare");
        let text = paragraph.innerText; 
        let link = paragraph.querySelector("a") ? paragraph.querySelector("a").href : ""; 

        let shareContent = text + " " + link; 

        if (navigator.share) {
            navigator.share({
                console: "To share",
                text: shareContent
            }).then(() => {
                console.log("successful");
            }).catch((error) => {
                console.log(error);
            });
        } else {
            alert("this feature not supposed you browser");
        }
            }
