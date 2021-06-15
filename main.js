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
/* Button to top */ 
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.querySelector("#backToTop").style.visibility = "visible";
        document.querySelector("#backToTop").style.opacity = "1";
    } else {
        document.querySelector("#backToTop").style.visibility = "hidden";
        document.querySelector("#backToTop").style.opacity = "0";
    } 
})
document.querySelector("#backToTop").addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
$('.news-upslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.news-double-slider'
});

$('.news-double-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.news-upslider',
    dots: true,
    arrows: false,
    focusOnSelect: true
});


