let swiperWrapper = document.querySelector('.swiper-wrapper');
let toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function myFunction() {
  let menu = document.querySelector('.toggle-nav');

  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
    toggle.classList.remove('clicked');
  } else {
    menu.style.display = 'flex';
    toggle.classList.add('clicked');
  }
});

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  setWrapperSize: true,
  direction: 'horizontal',
  speed: 2400,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
