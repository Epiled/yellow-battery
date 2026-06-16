let slideIndex = 0;
let slides = document.querySelectorAll("[data-slide]");
let dots = document.querySelectorAll("[data-dot]");
let timer;

function showSlides() {
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  resetIndex(slideIndex);
}

function plusSlides(position) {
  clearTimeout(timer);
  slideIndex +=position;
  if (slideIndex> slides.length) {slideIndex = 1}
  else if(slideIndex<1){slideIndex = slides.length}
  resetIndex(slideIndex);
}

function currentSlide(index) {
  clearTimeout(timer);
  if (index> slides.length) {index = 1}
  else if(index<1){index = slides.length}
  slideIndex = index;
  resetIndex(slideIndex);
}

function resetIndex(index) {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
 }
 for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" banner__dot--active", "");
   }
   slides[index-1].style.display = "block";  
   dots[index-1].className += " banner__dot--active";
   timer = setTimeout(showSlides, 4000);
}

showSlides();