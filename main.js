$('.center').slick({
    centerMode: true,
    adaptiveHeight: true,
    prevArrow: '<button class="slick-prev slick-prev-button" aria-label="Previous" type="button">Previous</button>',
    nextArrow: '<button class="slick-next slick-next-button" aria-label="Next" type="button">Next</button>',
    variableWidth: true,
    centerPadding: '50px',
    slidesToShow: 5,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                centerPadding: '5px',
                centerMode: true,
                slidesToShow: 1
            }
        }
    ]
});
$('.deminews__group').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
})

$('.upslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.downslider'
});
$('.downslider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.upslider',
    dots: true,
    arrows: false,
    focusOnSelect: true
});