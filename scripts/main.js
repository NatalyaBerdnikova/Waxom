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

let filterCategory = document.querySelectorAll('.filter__category')

if (filterCategory !== undefined) {
  for (let i = 0; i < filterCategory.length; i++) {
    filterCategory[i].addEventListener('click', function () {
      let filterCategoryActive = document.querySelector('.filter__category--active');
      filterCategoryActive.classList.remove('filter__category--active');
      filterCategory[i].classList.add('filter__category--active');
    })
  }
}
