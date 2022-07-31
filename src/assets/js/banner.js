let slideIndex = 0;
let slides = document.querySelectorAll("[data-slide]");
let dots = document.querySelectorAll("[data-dot]");

function showSlides() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}   
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" banner__dot--active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " banner__dot--active";
  setTimeout(showSlides, 5000);
}

showSlides();