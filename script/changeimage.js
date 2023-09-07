// Get references to the image and container
const imageContainer = document.getElementsById("zoom");
const image = document.getElementById("changeimage");

// Define the new image source for when hovering
const newImageSrc = "/web115/images/meinfrontofsign.jpg";

// Add event listeners for mouse hover and mouse out
imageContainer.addEventListener("mouseover", function () {
    // Change the image source on hover
    image.src = newImageSrc;
});

imageContainer.addEventListener("mouseout", function () {
    // Restore the original image source on mouse out
    image.src = "/workspaces/web115/images/army_me.jpg";
});