svg4everybody({
  validate: function (src, svg, use) {
    return true;
  }
});

//init toggle menu

let toggle = document.querySelector('.header__toggle');
let menu = document.querySelector('.header__nav');

function toggleMenu() {
  menu.classList.toggle('header__nav--toggle');

  document.querySelector('#menu-item-top').classList.toggle('header__toggle-item--top');
  document.querySelector('#menu-item-mid').classList.toggle('header__toggle-item--mid');
  document.querySelector('#menu-item-bot').classList.toggle('header__toggle-item--bot');

}

toggle.onclick = toggleMenu;

var swiperFood = new Swiper('.food__slider-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    540: {
      slidesPerView: 3,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiperAbout = new Swiper('.about__slider-container', {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  breakpoints: {
    540: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
  },
});

let header = document.querySelector('.header');

function tab() {
  header.classList.toggle('header-tab');
}

setInterval(tab, 3000)