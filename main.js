const menuBtn = document.querySelector('.hamburger-menu');
const menuList = document.querySelector('.mobile-nav');
const navRule = document.querySelector('.nav-rule');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuList.classList.add('open');
    navRule.classList.add('open');
    document.body.style.overflow = 'hidden';
    menuOpen = true;
  } else { 
    menuBtn.classList.remove('open');
    menuList.classList.remove('open');
    navRule.classList.remove('open');
    document.body.style.overflow = 'scroll';
    menuOpen = false;
  }
});

let slides = document.querySelectorAll('.slideshow .slide-pic');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,5000);
function nextSlide() {
    slides[currentSlide].className = 'slide-pic';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide-pic card-part-1';
}