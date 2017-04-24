setInterval(function () {
        plusSlides(1);
    }, 3000);
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*
var pic = document.getElementById('imageid');
function grey() {
  pic.src = "Images\pls.jpg";
}
function blue() {
  pic.src = "Images\pA-header1.jpg";
}
document.getElementById('btn1').addEventListener('click', grey);
document.getElementById('btn2').addEventListener('click', blue);
*/