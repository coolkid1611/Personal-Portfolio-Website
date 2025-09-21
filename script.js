const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    const name = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');
    
    if (!name.value || !email.value) {
        e.preventDefault();
        alert("Please fill in all fields.");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".typing-text", {
        strings: ["Mathematics.", "Statistics.", "Data Science.", "Programming."], // Add more words
        typeSpeed: 100,  // Slower typing speed
        backSpeed: 60,   // Slower deleting speed
        backDelay: 500,  // Delay before starting to delete
        loop: true,      // Loops infinitely
        showCursor: false // Removes the blinking cursor
    });
});
