const navbar = document.querySelector('.navbar-custom');

const navbarscrolled = window.addEventListener("scroll", () => {
  let scrollPosition = scrollY > 45;
  navbar.classList.toggle("scrolled", scrollPosition);
});

const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click',() => {

  let imgLogo = document.querySelector('.menu-toggle img');
  navbar.classList.toggle('show');

  if(navbar.classList.contains('show')){
    imgLogo.src = "assets/images/icon-close.svg";
  } else {
    imgLogo.src = "assets/images/icon-hamburger.svg";
  }

} )

  