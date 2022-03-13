
//// Hero Section jQuery ////

$('.company-name').hide()
$('.hero-flex-item').hide()
$('.flag').hide()


setTimeout(() => {
    $(".company-name").fadeIn(800)
}, 500)

setTimeout(() => {
    $('.hero-flex-item').fadeIn(800)
}, 1150)

setTimeout(() => {
    $('.flag').fadeIn(800)
}, 1500)

// setTimeout(() => {
//     $('.three').fadeIn(800)
// }, 1500)

// setTimeout(() => {
//     $('.one').fadeIn(800)
// }, 1000)


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