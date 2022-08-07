document.addEventListener('DOMContentLoaded', () => {

  // Слайдер последних новостей

  let relatedNewsImg = new Swiper(".related-news__slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".related-news__slider-next",
      prevEl: ".related-news__slider-prev",
    },
    pagination: {
      el: ".related-news__slider-pagination",
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  });

  // Выдвигающееся меню

  const menuBtn = document.querySelector('.header__btn-nav');
  const sidebarWrapper = document.querySelector('.sidebar-wrapper');
  const sidebarClose = document.querySelector('.sidebar__close');

  const toggleSidebar = function () {
    sidebarWrapper.classList.toggle("--active");
  }

  menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleSidebar();
  });

  document.addEventListener("click", function (e) {
    const target = e.target;
    const its_sidebar = target == sidebarWrapper || sidebarWrapper.contains(target);
    const its_menuBtn = target == menuBtn;
    const sidebar_is_active = sidebarWrapper.classList.contains("--active");

    if (!its_sidebar && !its_menuBtn && sidebar_is_active) {
      toggleSidebar();
    }
  });

  sidebarClose.addEventListener("click", function (e) {
    sidebarWrapper.classList.remove('--active');
  });

})