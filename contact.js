const menuBtn = document.querySelector('.hamburger-menu');
const menuList = document.querySelector('.mobile-nav');
const navRule = document.querySelector('.nav-rule');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuList.classList.add('open');
    navRule.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuList.classList.remove('open');
    navRule.classList.remove('open');
    menuOpen = false;
  }
});