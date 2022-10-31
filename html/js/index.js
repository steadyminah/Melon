//index.js
$(function(){
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4.285,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
});