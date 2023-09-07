// Get references to the image and container
const image = document.getElementById("changeimage");
const imageContainer = document.getElementsByClassName("zoom");

// Define the new image source for when hovering
const newImageSrc = "../web115/images/";

// Add event listeners for mouse hover and mouse out
imageContainer.addEventListener("mouseover", function () {
    // Change the image source on hover
    image.src = newImageSrc;
});

imageContainer.addEventListener("mouseout", function () {
    // Restore the original image source on mouse out
    image.src = "original-image.jpg";
});