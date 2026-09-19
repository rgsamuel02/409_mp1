/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */

// HTML Files
import './index.html';

// Stylesheets
import './css/main.scss';

// Scripts
import './js/main.js';


// Navbar Settings
const sections = document.querySelectorAll("header, section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    const navbar = document.querySelector("nav");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

function updateActiveSection() {

    const navbar = document.querySelector("nav");
    const navbarBottom = navbar.getBoundingClientRect().bottom;

    let currentSection = sections[0];

    sections.forEach(function (section) {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= navbarBottom) {
            currentSection = section;
        }

    });

    const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5;

    if (atBottom) {
        currentSection = sections[sections.length - 1];
    }

    navLinks.forEach(function (link) {
        link.classList.remove("active");
    });

    const activeLink = document.querySelector(
        `.nav-links a[href="#${currentSection.id}"]`
    );

    if (activeLink) {
        activeLink.classList.add("active");
    }
}

window.addEventListener("scroll", updateActiveSection);

updateActiveSection();

// Carousel

const slides = document.querySelectorAll(".slide");

const previousButton = document.querySelector("#previous-button");

const nextButton = document.querySelector("#next-button");

let currentSlide = 0;

function showSlide(slideNumber) {
    slides.forEach(function (slide) {
        slide.classList.remove("active");
    });

    slides[slideNumber].classList.add("active");
}
nextButton.addEventListener("click", function () {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
});

previousButton.addEventListener("click", function () {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
});

// Modal
const learnMoreButton =
    document.querySelector("#learn-more-button");

const modal =
    document.querySelector("#experience-modal");

const modalClose =
    document.querySelector("#modal-close");

learnMoreButton.addEventListener("click", function () {
    modal.classList.add("show");
});
modalClose.addEventListener("click", function () {
    modal.classList.remove("show");
});
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});