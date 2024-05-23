const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.carousel-item');
const indicators = carousel.querySelectorAll('.carousel-indicators button');
const prevButton = carousel.querySelector('.carousel-control-prev');
const nextButton = carousel.querySelector('.carousel-control-next');
let currentIndex = 0;
let autoSlideInterval;
let isTransitioning = false;

function showSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    items[currentIndex].classList.remove('active');
    indicators[currentIndex].classList.remove('active');
    currentIndex = (index + items.length) % items.length;
    items[currentIndex].classList.add('active');
    indicators[currentIndex].classList.add('active');

    setTimeout(() => {
        isTransitioning = false;
    }, 600);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
    resetAutoSlide();
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
    resetAutoSlide();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
        resetAutoSlide();
    });
});

startAutoSlide();
