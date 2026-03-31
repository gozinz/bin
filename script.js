// Slider functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}  
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// WhatsApp booking form integration
const form = document.getElementById('bookingForm');
const url = 'https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=';

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const message = `Name: ${form.name.value}\nEmail: ${form.email.value}`;
    window.open(url + encodeURIComponent(message), '_blank');
});

// Smooth scroll functionality
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
