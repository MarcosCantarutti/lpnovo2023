let swiperButton = document.querySelector('.swiper-button-next');
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
  direction: 'horizontal',
  slidesPerView: 4,
  speed: 1200,
  mousewheel: true,
  keyboard: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1100: {
      spaceBetween: 20,
    },
    950: {
      slidesPerView: 2,
      spaceBetween: 140,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 140,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 160,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 160,
    },
  },
});

const swiperTest = new Swiper('.swiper-container-test', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 100,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
    // when window width is >= 800px
    800: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
  },

  mousewheel: true,
  keyboard: true,
  navigation: {
    nextEl: '.swiper-button-next-test',
    prevEl: '.swiper-button-prev-test',
  },
});
