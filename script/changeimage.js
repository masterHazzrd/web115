const imgcontainer = document.getElementById("zoom");
const img = document.getElementById("changeimg");

const newImgSrc = "/web115/images/meinfrontofsign.jpg";

imgcontainer.addEventListener("mouseover", function chngImg() {
    img.src = newImgSrc;
});

imgcontainer.addEventListener("mouseout", function chngImg() {
    img.src = "/web115/images/biohard_skull_2.jpg";
});