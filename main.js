let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("slide-pic");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

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
    menuOpen = false;
  }
});