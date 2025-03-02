
document.getElementById("menu").addEventListener("click", function () {
    let nav = document.getElementById("list");
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("mode");
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    };
    button.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        let theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
        localStorage.setItem("theme", theme);
    });
});


function slidePage() {
            let page = document.querySelector("body");
            page.classList.add("slide-out");
            setTimeout(() => {
                window.location.href = "identify.html"; // Dusra page load hoga
            }, 1000); // 1 second baad page change hoga
        }

function slidePag() {
            let page = document.querySelector("body");
            page.classList.add("slide-in");
            setTimeout(() => {
                window.location.href = "index.html"; // Dusra page load hoga
            }, 1000); // 1 second baad page change hoga
        }


function slide1() {
            let page = document.querySelector("body");
            page.classList.add("slide-out");
            setTimeout(() => {
                window.location.href = "language.html"; // Dusra page load hoga
            }, 1000); // 1 second baad page change hoga
        }
function slide2() {
            let page = document.querySelector("body");
            page.classList.add("slide-in");
            setTimeout(() => {
                window.location.href = "identify.html"; // Dusra page load hoga
            }, 1000); // 1 second baad page change hoga
        }
        
        function slide3() {
            let page = document.querySelector("body");
            page.classList.add("slide-out");
            setTimeout(() => {
                window.location.href = "project.html"; // Dusra page load hoga
            }, 1000); // 1 second baad page change hoga
        }
function slide4() {
            let page = document.querySelector("body");
            page.classList.add("slide-in");
            setTimeout(() => {
                window.location.href = "language.html"; // Dusra page load hoga
            }, 1000); // 1 second baad page change hoga
        }
        
        function slide5() {
            let page = document.querySelector("body");
            page.classList.add("slide-out");
            setTimeout(() => {
                window.location.href = "window.html"; // Dusra page load hoga
            }, 1000); // 1 second baad page change hoga
        }
function slide6() {
            let page = document.querySelector("body");
            page.classList.add("slide-in");
            setTimeout(() => {
                window.location.href = "project.html"; // Dusra page load hoga
            }, 1000); // 1 second baad page change hoga
        }
        
function slide7() {
            let page = document.querySelector("body");
            page.classList.add("slide-out");
            setTimeout(() => {
                window.location.href = "BoldBan.html"; // Dusra page load hoga
            }, 1000); // 1 second baad page change hoga
        }
function slide8() {
            let page = document.querySelector("body");
            page.classList.add("slide-in");
            setTimeout(() => {
                window.location.href = "window.html"; // Dusra page load hoga
            }, 1000); // 1 second baad page change hoga
                            }
