 // this is for mobile view

function initMobileMenu(){

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', ()  => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      });
    });
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        target.scrollIntoView({
          bahavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function(){
  initMobileMenu();
  initSmoothScroll();

  console.log('Portfolio website loaded successfully!');

});


