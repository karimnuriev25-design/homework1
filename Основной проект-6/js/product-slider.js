export const productSlider = () => {
    new Swiper('.product__slider', {
        slidesPerView: "auto", 
        centeredSlides: true,
        loop: true,
        mousewheel: {
            forceToAxis:true,
        },
        navigation: {
            prevEl: '.product__slider-button--pref',
            nextEl: '.product__slider-button--next',
        },
    });
};