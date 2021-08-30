
//Menu déroulant petit ecran
const mobileNav = document.querySelector('.hamburger');

mobileNav.addEventListener('click', mobileMenuToogle);

function mobileMenuToogle(){
  document.querySelector('.planets').classList.toggle('active');
}
