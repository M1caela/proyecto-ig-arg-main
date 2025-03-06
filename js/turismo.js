let currentIndex = 0;
const carousel = document.getElementById("carousel");
const totalItems = 8;
const visibleItems = 3;
const itemWidth = carousel.firstElementChild.offsetWidth + 16; // 16px padding

document.getElementById("nextBtn").addEventListener("click", function() {
    if (currentIndex < totalItems - visibleItems) {
        currentIndex++;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
});

document.getElementById("prevBtn").addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
});