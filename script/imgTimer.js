var Imgs = ["../web115/images/army_me.jpg", "../web115/images/biohard_skull_2.jpg", "../web115/images/meinfrontofsign.jpg", "../web115/images/biohazard_skull.jpg", "../web115/images/meandwifeyatconcert.jpg"]

var index = 0;
setInterval (function(){
  if (index == Imgs.length) {
    index = 0;
  }
  document.getElementById("chgImg").src = Imgs[index];
  index++;
} , 2585);