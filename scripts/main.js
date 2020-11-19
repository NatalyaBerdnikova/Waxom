let sliderHome = new Swiper('.js-slider-home', {
    loop: true,
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.slider__navigation-next',
      prevEl: '.slider__navigation-prev',
    },
});

let sliderPosts = new Swiper('.js-slider-posts', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.posts__navigation-next',
    prevEl: '.posts__navigation-prev',
  },
});
