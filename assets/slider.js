const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.carousel-item');
const indicators = carousel.querySelectorAll('.carousel-indicators button');
const pastButton = carousel.querySelector('.carousel-control-prev');
const newButton = carousel.querySelector('.carousel-control-next');
let currentIndexslider = 0;
let autoSlideInterval;
let isTransitioning = false;

function showSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    items[currentIndexslider].classList.remove('active');
    indicators[currentIndexslider].classList.remove('active');
    currentIndexslider = (index + items.length) % items.length;
    items[currentIndexslider].classList.add('active');
    indicators[currentIndexslider].classList.add('active');

    setTimeout(() => {
        isTransitioning = false;
    }, 600);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlide(currentIndexslider + 1);
    }, 3000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

pastButton.addEventListener('click', () => {
    showSlide(currentIndexslider - 1);
    resetAutoSlide();
});

newButton.addEventListener('click', () => {
    showSlide(currentIndexslider + 1);
    resetAutoSlide();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
        resetAutoSlide();
    });
});

startAutoSlide();
