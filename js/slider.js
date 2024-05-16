const slides = document.querySelectorAll('.slider-swiper__contant-cards-card');
let currentSlide = 0;

const showSlides = () => {
    for (let i = 0; i < slides.length; i++) {
        if (i >= currentSlide && i < currentSlide + 3) {
            slides[i].classList.add('active');
        } else {
            slides[i].classList.remove('active');
        }
    }
};

document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = Math.max(currentSlide - 1, 0);
    showSlides();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = Math.min(currentSlide + 1, slides.length - 3);
    showSlides();
});

showSlides();