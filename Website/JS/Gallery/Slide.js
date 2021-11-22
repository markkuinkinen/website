var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n); //It automatically displays the first picture
}							   //and starts a counter to go through the photos
							   //If the counter is larger than the number of photos
							   //the counter is reset to 1 and displays the first photo
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("gallery");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";} //none is same as null
  slides[slideIndex-1].style.display = "block"; //loads element as a block, replaces old "block" and updates the counter, loading a new image
}
