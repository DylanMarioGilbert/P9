document.addEventListener(function () {
    let carouselIndicators = document.querySelectorAll('.carousel-indicators button');
    let carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function updateCarousel(newIndex) {
        carouselItems[currentIndex].classList.remove('active');
        carouselIndicators[currentIndex].classList.remove('active');
        currentIndex = newIndex;
        carouselItems[currentIndex].classList.add('active');
        carouselIndicators[currentIndex].classList.add('active');
    }

    document.querySelector('.carousel-control-prev').addEventListener('click', function () {
        let newIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
        updateCarousel(newIndex);
    });

    document.querySelector('.carousel-control-next').addEventListener('click', function () {
        let newIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
        updateCarousel(newIndex);
    });

    carouselIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function () {
            updateCarousel(index);
        });
    });
});
