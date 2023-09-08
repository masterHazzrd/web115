const images = document.querySelectorAll(".changeimg");

let currentIndex = 0;

const interval = 4500;

function scrollImg() {
    images[currentIndex].computedStyleMap.opacity = 0;
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].computedStyleMap.opacity = 1;
}

changeImage();

setInterval(changeImage(), interval);