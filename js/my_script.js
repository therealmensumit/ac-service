$(document).ready(function(){
    $('.hamburger').click(function(){
        $(this).toggleClass('toggle');
        $('header nav ul').toggleClass('shownav');
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    freeMode: false,
    loop: true,
    speed: 1400,
    autoplay: true,
    delay: 4000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
});