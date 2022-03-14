// a compnay name h1 about h2 flag

// jQuery for hero section 

$('a.company-name').hide()
$('h1.about').hide()
$('h2.flag').hide()
$('h3.about-title').css('padding-top', '30vh')

setTimeout(() => {
    $('a.company-name').fadeIn()
}, 500)

setTimeout(() => {
    $('h1.about').fadeIn()
}, 1150)

setTimeout(() => {
    $('h2.flag').fadeIn()
}, 1500)

setTimeout(() => {
    $('h3.about-title').css('padding-top', '0')
}, 1500)










//// IMG Carousel /////


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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