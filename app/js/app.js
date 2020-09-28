svg4everybody({
  validate: function (src, svg, use) {
    return true;
  }
});

var swiperFood = new Swiper('.food__slider-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}); 
