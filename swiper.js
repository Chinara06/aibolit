const swiper = new Swiper('.history__swiper', {
    loop: true,
    slidesPerView: 6,
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next-el',
        prevEl: '.swiper-button-prev-el',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


var swiper2 = new Swiper(".clinic__swiper", {
    direction: 'vertical',
    // effect: 'slide',
    slidesPerView: 1,
    loop: true,
    // autoplay: {
    //     delay: 2000,
    //     reverseDirection: true,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});
