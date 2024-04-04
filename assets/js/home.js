$(document).ready(function () {
    $('.hero__slide').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
    });

    $('.prev-btn').click(function () {
        $('.hero__slide').slick('slickPrev');
    });

    $('.next-btn').click(function () {
        $('.hero__slide').slick('slickNext');
    });

    $('.news__list').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $('.prev-btn-news').click(function () {
        var currentProductList = $(this).closest('.news').find('.news__list');
        currentProductList.slick('slickPrev');
    });

    $('.next-btn-news').click(function () {
        var currentProductList = $(this).closest('.news').find('.news__list');
        currentProductList.slick('slickNext');
    });

    $('.brand__list').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    });
});
