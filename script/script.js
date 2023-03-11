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
  slidesPerView: 3,
  mousewheel: true,
  keyboard: true,
  setWrapperSize: true,
  breakpoints: {
    767: {
      slidesPerView: 1,
      setWrapperSize: true,
    },
  },
});

// swiperButton.addEventListener('click', () => {
//   let swiperWrapper = document.querySelector('.swiper-wrapper');
//   console.log(swiperWrapper.style.transform);
// });
