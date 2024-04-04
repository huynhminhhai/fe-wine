$(document).ready(function () {
    const header = $('.header');
    const toggleClass = 'is-sticky';

    $(window).scroll(function () {
        const currentScroll = $(window).scrollTop();
        if (currentScroll > 0) {
            header.addClass(toggleClass);
        } else {
            header.removeClass(toggleClass);
        }
    });

    $('.header__menu--mb').click(function () {
        $('.blur').addClass('active');
        $('.sidebar').addClass('active');
    });

    $('.blur').click(function () {
        $(this).removeClass('active');
        $('.sidebar').removeClass('active');
    });

    $('.sidebar__link').click(function () {
        $(this).parent().toggleClass('active');
        var content = $(this).siblings('.sidebar__menu');
        if (content.hasClass('active')) {
            content.removeClass('active').animate({ height: 0 }, 300);
        } else {
            content
                .addClass('active')
                .animate({ height: content[0].scrollHeight }, 300);
        }
    });

    if ($('.products__list')) {
        $('.products__list').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
            ],
        });

        $('.prev-btn-products').click(function () {
            var currentProductList = $(this)
                .closest('.products')
                .find('.products__list');
            currentProductList.slick('slickPrev');
        });

        $('.next-btn-products').click(function () {
            var currentProductList = $(this)
                .closest('.products')
                .find('.products__list');
            currentProductList.slick('slickNext');
        });
    }

    if ($('.news__slide')) {
        $('.news__slide').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });

        $('.prev-btn-products').click(function () {
            var currentProductList = $(this)
                .closest('.products')
                .find('.news__slide');
            currentProductList.slick('slickPrev');
        });

        $('.next-btn-products').click(function () {
            var currentProductList = $(this)
                .closest('.products')
                .find('.news__slide');
            currentProductList.slick('slickNext');
        });
    }

    $('.btn-submenu').click(function () {
        $(this).parent().toggleClass('active');
        var content = $(this).parent().siblings('.sidebar__submenu');
        if (content.hasClass('active')) {
            content.removeClass('active').animate({ height: 0 }, 300);
        } else {
            content
                .addClass('active')
                .animate({ height: content[0].scrollHeight }, 300);
        }
        setTimeout(() => {
            $(this)
                .parents('.sidebar__menu')
                .animate(
                    {
                        height: $(this).parents('.sidebar__menu--list')[0]
                            .scrollHeight,
                    },
                    200
                );
        }, 300);
    });

    jQuery.extend(jQuery.validator.messages, {
        required: 'Vui lòng nhập thông tin này.',
    });

    jQuery.validator.addMethod(
        'fullname',
        function (value, element) {
            if (
                /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]{2,}(?: [a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+){1,2}$/.test(
                    value
                )
            ) {
                return true;
            } else {
                return false;
            }
        },
        'Vui lòng nhập họ tên hợp lệ.'
    );

    jQuery.validator.addMethod(
        'phonenumber',
        function (value, element) {
            if (/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(value)) {
                return true;
            } else {
                return false;
            }
        },
        'vui lòng nhập số điện thoại hợp lệ.'
    );

    if ($('#form-contact')) {
        $('#form-contact').validate({
            rules: {
                name: {
                    required: true,
                    fullname: true,
                },
                phone: {
                    required: true,
                    phonenumber: true,
                },
            },
            submitHandler: function (form, e) {
                e.preventDefault();
            },
        });
    }
});
