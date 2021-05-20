document.addEventListener('DOMContentLoaded', () => {
  const swiperRun = new Swiper('#swiper-run', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  const swiperPeople = new Swiper('#swiper-testimonials', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

