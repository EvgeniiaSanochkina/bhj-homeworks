let sliderItem = Array.from(document.getElementsByClassName('slider__item'));
let prev = document.querySelector('.slider__arrow_prev');
let next = document.querySelector('.slider__arrow_next');

next.onclick = function() {
    let index = sliderItem.findIndex((slider) => slider.classList.contains("slider__item_active"));
    sliderItem[index].classList.remove("slider__item_active");
    (index == (sliderItem.length - 1)) ? sliderItem[0].classList.add('slider__item_active'): sliderItem[index + 1].classList.add('slider__item_active');
}

prev.onclick = function() {
    let index = sliderItem.findIndex((slider) => slider.classList.contains("slider__item_active"));
    sliderItem[index].classList.remove("slider__item_active");
    (index == 0) ? sliderItem[sliderItem.length - 1].classList.add('slider__item_active'): sliderItem[index - 1].classList.add('slider__item_active');
}