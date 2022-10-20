$(function() {
    $('.burger').on('click', function() {
        $(this).toggleClass('active')
        $('.header').toggleClass('active')

    })
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.header').addClass('scroll')
        } else {
            $('.header').removeClass('scroll')
        }
    });

    $('.sec1__cloud button').on('click', function() {
        if (!$(this).hasClass('active')) {
            $('.sec1__cloud button').removeClass('active')
            $(this).addClass('active')
            $('.sec1__cloud .sec1__cloud__text').hide()
            $('.sec1__cloud .sec1__cloud__text').eq($(this).index()).fadeIn()
        }
    })

    $('.sec4__item button').on('click', function() {
        $(this).closest('.sec4__item').toggleClass('active')
        $(this).closest('.sec4__item').find('.sec4__toggle').slideToggle()
    })

    $('.form__input input').on('focus', function() {
        $(this).closest('.form__input').addClass('active')
    })
    $('.form__input input').on('blur', function() {
        if ($(this).val().length == 0) {
            $(this).closest('.form__input').removeClass('active')
        }

    })
    $('.sec6__slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var index = (currentSlide ? currentSlide : 0) + 1;
        $('.sec6__slider__index__text').text(index + ' / ' + slick.slideCount);
    });
    $('.sec6__slider').slick({
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                adaptiveHeight: true
            }
        }]
    })

    $('.sec6__slider__index .prev').on('click', function() {
        $('.sec6__slider').slick('slickPrev');
    })
    $('.sec6__slider__index .next').on('click', function() {
        $('.sec6__slider').slick('slickNext');
    })


    $('.sec9__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
    })


    $(".sroll-menu").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            top = $(id).offset().top;

        if ($(window).width() < 1025) {
            $('.burger').removeClass('active')
            $('.header').removeClass('active')
            top = top - 84;
        }
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 500);
    });


    function validate(form) {
        e.preventDefault()
        console.log(form)
    }

    $('.validate').validate({

        submitHandler: function(form) {
            $.fancybox.close();
            $.fancybox.open({
                src: '#senk',
            })
            return false;

        }
    })
    $('.validate2').validate({

        submitHandler: function(form) {
            $.fancybox.open({
                src: '#senk',
            })
            return false;

        }
    })
    $.validator.messages.required = '';

    $('.checkbox input').on('change', function() {
        if (!$(this).is(':checked')) {
            $(this).closest('.validate').addClass('not-checked')
        } else {
            $(this).closest('.validate').removeClass('not-checked')
        }
    })
    $('.validate2 .checkbox input').on('change', function() {
        if (!$(this).is(':checked')) {
            $(this).closest('.validate2').addClass('not-checked')
        } else {
            $(this).closest('.validate2').removeClass('not-checked')
        }
    })

})