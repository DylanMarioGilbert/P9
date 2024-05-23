const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.carousel-item');
const indicators = carousel.querySelectorAll('.carousel-indicators button');
const prevButton = carousel.querySelector('.carousel-control-prev');
const nextButton = carousel.querySelector('.carousel-control-next');
let currentIndex = 0;
let isTransitioning = false;

function showSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    items[currentIndex].classList.remove('active');
    indicators[currentIndex].classList.remove('active');
    currentIndex = (index + items.length) % items.length;
    items[currentIndex].classList.add('active');
    indicators[currentIndex].classList.add('active');

    setTimeout(() => isTransitioning = false, 600);
}

prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
nextButton.addEventListener('click', () => showSlide(currentIndex + 1));
indicators.forEach((indicator, index) => indicator.addEventListener('click', () => showSlide(index)));
