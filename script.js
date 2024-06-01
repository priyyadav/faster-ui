document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 1;

    function updateCarousel() {
        const itemWidth = items[currentIndex].offsetWidth;
        const translateXValue = -currentIndex * itemWidth + (itemWidth / 4);
        
        for (let i = 0; i < items.length; i++) {
            items[i].style.transform = `translateX(${translateXValue}px)`;
        }
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === items.length - 1;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Initial update
    updateCarousel();
});
