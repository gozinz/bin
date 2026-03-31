// slider.js

class Slider {
    constructor(element, options) {
        this.element = element;
        this.options = options || {};
        this.currentIndex = 0;
        this.slides = this.element.querySelectorAll('.slide');
        this.autoRotateInterval = null;
        this.init();
    }

    init() {
        this.showCurrentSlide();
        if (this.options.autoRotate) {
            this.startAutoRotate();
        }
    }

    showCurrentSlide() {
        this.slides.forEach((slide, index) => {
            slide.style.display = index === this.currentIndex ? 'block' : 'none';
        });
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.showCurrentSlide();
    }

    startAutoRotate() {
        this.autoRotateInterval = setInterval(() => this.nextSlide(), this.options.rotationTime || 3000);
    }

    stopAutoRotate() {
        clearInterval(this.autoRotateInterval);
    }
}

// WhatsApp Booking Form Integration
const whatsappBookingForm = document.querySelector('#whatsappBookingForm');
const whatsappSendBtn = document.querySelector('#whatsappSendBtn');
whatsappSendBtn.addEventListener('click', () => {
    const bookingDetails = {
        name: document.querySelector('#name').value,
        date: document.querySelector('#date').value,
        time: document.querySelector('#time').value
    };
    const whatsappNumber = 'your-whatsapp-number';
    const message = `Booking Request: ${JSON.stringify(bookingDetails)}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
});
