svg4everybody({
  validate: function (src, svg, use) {
    return true;
  }
});

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
