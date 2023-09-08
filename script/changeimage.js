const images = [
    "/web115/images/meinfrontofsign.jpg",
    "/web115/images/biohard_skull_2.jpg",
    "/web115/images/meandwifeyatconcert.jpg",
    "/web115/images/biohazard_skul.jpg",
    // Add more image URLs here
];

const imgChngr = document.getElementById("changeimg");
let currentIndex = 0;

function changeImage() {
    imgChngr.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

// Change image every 3 seconds (adjust the time interval as needed)
const interval = setInterval(changeImage, 3000);

// Reset to the first image after going through all images
imgChngr.addEventListener("load", function () {
    clearInterval(interval);
    setTimeout(function () {
        currentIndex = 0;
        changeImage();
        interval = setInterval(changeImage, 3000);
    }, 3000); // Delay before resetting (3 seconds in this example)
});