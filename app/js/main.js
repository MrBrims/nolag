document.addEventListener('DOMContentLoaded', () => {

  let relatedNewsImg = new Swiper(".related-news__slider", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 15,
    loop: true,
    navigation: {
      nextEl: ".related-news__slider-next",
      prevEl: ".related-news__slider-prev",
    },
    pagination: {
      el: ".related-news__slider-pagination",
      clickable: true,
    },
  });

})