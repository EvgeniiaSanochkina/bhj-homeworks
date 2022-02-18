let sliderItem = Array.from(document.getElementsByClassName('slider__item'));
let prev = document.querySelector('.slider__arrow_prev');
let next = document.querySelector('.slider__arrow_next');
let currentSlide = 0;

next.onclick = function() {
    if (currentSlide == (sliderItem.length - 1)) {
        sliderItem[0].classList.add('slider__item_active');
        sliderItem[sliderItem.length - 1].classList.remove('slider__item_active');
        currentSlide = 0;
    } else if (currentSlide == 0) {
        sliderItem[1].classList.add('slider__item_active');
        sliderItem[currentSlide].classList.remove('slider__item_active');
        currentSlide++;
    } else {
        sliderItem[currentSlide + 1].classList.add('slider__item_active');
        sliderItem[currentSlide].classList.remove('slider__item_active');
        currentSlide++;
    }
}

prev.onclick = function() {
    if (currentSlide == (sliderItem.length - 1)) {
        sliderItem[currentSlide - 1].classList.add('slider__item_active');
        sliderItem[currentSlide].classList.remove('slider__item_active');
        currentSlide = sliderItem.length - 2;
    } else if (currentSlide == 0) {
        sliderItem[sliderItem.length - 1].classList.add('slider__item_active');
        sliderItem[currentSlide].classList.remove('slider__item_active');
        currentSlide = sliderItem.length - 1;
    } else {
        sliderItem[currentSlide - 1].classList.add('slider__item_active');
        sliderItem[currentSlide].classList.remove('slider__item_active');
        currentSlide--;
    }
}