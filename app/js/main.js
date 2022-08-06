document.addEventListener('DOMContentLoaded', () => {

  // Слайдер последних новостей

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

  // Работа навигации

  // const menuBtn = document.querySelector('.header__btn-nav');
  // const content = document.querySelector('.content');
  // const sidebarWrapper = document.querySelector('.sidebar-wrapper');

  // if(content) {
  //   menuBtn.addEventListener("click", function () {
  //     menuBtn.classList.toggle('--active');
  //     content.classList.toggle('--active');
  //     sidebarWrapper.classList.toggle('--active');
  //   });
  // }

})