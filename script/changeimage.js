const imgcontainer = document.getElementById("zoom");
const img = document.getElementById("changeimg");

const originalImg = img.scroll;

const newImgSrc = "/web115/images/meinfrontofsign.jpg";

imgcontainer.addEventListener("mouseover", function chngImg() {
    img.src = newImgSrc;
});

imgcontainer.addEventListener("mouseout", function chngImg() {
    img.src = "/web115/images/meandwifeyatconcert.jpg";
});

imgcontainer.addEventListener("load", function chngImg() {
    setTimeout(function chngImg() {
        img.src = originalImg;
    }, 3000);
});