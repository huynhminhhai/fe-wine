$(document).ready(function () {
    $('.products__category--plus').click(function () {
        $(this).parent().toggleClass('active');
        var content = $(this).parent().siblings('.products__category--sublist');
        console.log(content);
        if (content.hasClass('active')) {
            content.removeClass('active').animate({ height: 0 }, 300);
        } else {
            content
                .addClass('active')
                .animate({ height: content[0].scrollHeight }, 300);
        }
    });

    $('.detailP__center').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.detailP__slide',
    });
    $('.detailP__slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.detailP__center',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        prevArrow:
            "<button type='button' class='slick-prev pull-left'><img src='../assets/images/right-slider.svg' /></button>",
        nextArrow:
            "<button type='button' class='slick-next pull-right'><img src='../assets/images/right-slider.svg' /></button>",
    });
});
