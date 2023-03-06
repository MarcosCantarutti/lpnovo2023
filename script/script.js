let swiperWrapper = document.querySelector('.swiper-wrapper');
let button = document.querySelector('.swiper-button-next');

button.addEventListener('click', () => {
  console.log(swiperWrapper.style.transform);
  swiperWrapper.style.transform = 0;
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
