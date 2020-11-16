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
