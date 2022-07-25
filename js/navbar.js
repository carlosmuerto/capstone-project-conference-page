const navbar = document.querySelector('nav.navbar');
const navbarMenuBtn = document.querySelector('a#menu-btn');
const navbarMenuBtnClose = document.querySelectorAll(
  'nav.navbar > ul > li > a',
);

function showNavUl() {
  if (navbar.classList.contains('show')) {
    navbar.classList.remove('show');
  } else {
    navbar.classList.add('show');
  }
}

export default function navbarInit() {
  navbarMenuBtn.addEventListener('click', showNavUl);
  navbarMenuBtnClose.forEach((element) => {
    element.addEventListener('click', showNavUl);
  });
}