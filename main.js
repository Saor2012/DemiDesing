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
document.addEventListener("DOMContentLoaded", function(e) {
    console.log("Yes");
    let w = window.innerWidth; 
    let h = window.innerHeight;
    if (w < 500) {
        //document.querySelector(".container-md .test").innerHTML =+ ``;
        let newsSlider = `<div class="news-upslider deminews__group">
            <div class="news-upslider__item deminews__group_new carousel-item active">
                <h4 class="deminews__group_link">
                    <a href="https://dv-gazeta.info/dneprnews/vtorokursnik-dnu-vnedryaet-obrazovatelnyiy-startap.html" target="_blank" title="Узнать больше">dv-gazeta.info</a>
                </h4>
                <p class="deminews__group_info">
                    Второкурсник ДНУ
                    внедряет образовательный
                    стартап</p>
                <p class="deminews__group_img"><img src="img/img/new1.svg"></p>
            </div>
            <div class="news-upslider__item deminews__group_new carousel-item">
                <h4 class="deminews__group_link">
                    <a href="https://gorod.dp.ua/news/175438/" target="_blank" title="Узнать больше">gorod.dp.ua</a>
                </h4>
                <p class="deminews__group_info">
                    Люди, способные изменить мир:
                    стартапы от днепровских
                    изобретателей</p>
                <p class="deminews__group_img"><img src="img/img/new2.svg"></p>
            </div>
            <div class="news-upslider__item deminews__group_new carousel-item">
                <h4 class="deminews__group_link">
                    <a href="https://dp.vgorode.ua/news/sobytyia/408682-zakhvaty-smartfon-kak-poyhrat-s-vyrtualnymy-kosmycheskymy-heroiamy-v-parke-haharyna/" target="_blank" title="Узнать больше">dp.vgorode.ua</a>
                </h4>
                <p class="deminews__group_info">
                    Захвати смартфон:
                    как поиграть с виртуальными
                    космическими героями</p>
                <p class="deminews__group_img"><img src="img/img/new3.svg"></p>
            </div>
            <div class="news-upslider__item deminews__group_new carousel-item">
                <h4 class="deminews__group_link">
                    <a href="https://gagarinpark.dp.ua/about/ar/" target="_blank" title="Узнать больше">gagarinpark.dp.ua</a>
                </h4>
                <p class="deminews__group_info">
                    Команда Noosphere та студенти Noosphere Engineering School 
                    вперше в Україні створили студентський парк з доповненою реальністю!</p>
                <p class="deminews__group_img"><img src="img/img/new4.jpg"></p>
            </div>

            <div class="news-upslider__item deminews__group_new carousel-item">
                <h4 class="deminews__group_link">
                    <a href="https://mon.gov.ua/ua/news/studenti-dnu-rozrobili-dodatok-iz-dopovnenoyu-realnistyu-dlya-miscevogo-parku/" target="_blank" title="Узнать больше">mon.gov.ua</a>
                </h4>
                <p class="deminews__group_info">
                    Студенти ДНУ Розробили додаток із доповненою реальністю для місцевого парку</p>
                <p class="deminews__group_img"><img src="img/img/new5.jpg"></p>
            </div>
            <div class="news-upslider__item deminews__group_new carousel-item">
                <h4 class="deminews__group_link">
                    <a href="https://34.ua/v-dnepre-za-sponsorskie-dengi-rekonstruirovali-polovinu-parka-gagarina_n80837/" target="_blank" title="Узнать больше">34.ua</a>                                
                </h4>
                <p class="deminews__group_info">
                    В Днепре за спонсорские деньги реконструировали половину парка Гагарина</p>
                <p class="deminews__group_img"><img src="img/img/new6.jpg"></p>
            </div>
            <div class="news-upslider__item deminews__group_new carousel-item">
                <h4 class="deminews__group_link">
                    <a href="https://9-channel.com/2019/09/12/iz-parku-v-kosmos-park-im-gagarina-u-dnipri-onovlyuye-korporatsiya-noosfera-video/" target="_blank" title="Узнать больше">9-channel.com</a>
                </h4>
                <p class="deminews__group_info">
                    Із парку – в космос: парк ім. Гагарина у Дніпрі оновлює корпорація “Ноосфера” (відео)</p>
                <p class="deminews__group_img"><img src="img/img/new7.jpg"></p>
            </div>
            <div class="news-upslider__item deminews__group_new carousel-item">
                <h4 class="deminews__group_link">
                    <a href="https://11tv.dp.ua/news/dp/20190912-onovlenyj-park-gagarina-sogodni-vidkryvsya-na-terytoriyi-dniprovskogo-naczionalnogo-universytetu.html" target="_blank" title="Узнать больше">11tv.dp.ua</a>
                </h4>
                <p class="deminews__group_info">
                    Оновлений парк Гагаріна сьогодні відкрився на території Дніпровського національного університету</p>
                <p class="deminews__group_img"><img src="img/img/new8.jpg"></p>
            </div>
            </div>
            `;
            /*<div class="news-downslider">
                    <div class="news-downslider__item"><img src="img/img/new1.svg"></div>
                    <div class="news-downslider__item"><img src="img/img/new2.svg"></div>
                    <div class="news-downslider__item"><img src="img/img/new3.svg"></div>
                    <div class="news-downslider__item"><img src="img/img/new4.jpg"></div>
                    <div class="news-downslider__item"><img src="img/img/new5.jpg"></div>
                    <div class="news-downslider__item"><img src="img/img/new6.jpg"></div>
                    <div class="news-downslider__item"><img src="img/img/new7.jpg"></div>
                    <div class="news-downslider__item"><img src="img/img/new8.jpg"></div>
                </div> */
        document.querySelector(".news-double-slider").classList.add("carusel");
        document.querySelector(".news-double-slider.carusel").classList.add("slide");
        document.querySelector(".news-double-slider.carusel.slide").innerHTML = newsSlider;
        console.log("Yes");
        $('.news-upslider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,

        });
        /*$('.news-downslider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.news-upslider',
            dots: true,
            arrows: false,
            focusOnSelect: true
        });*/
    } else {
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
    }
});




