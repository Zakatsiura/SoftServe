const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slides');
const prevBtn = slider.querySelector('.prev-btn');
const nextBtn = slider.querySelector('.next-btn');
const slideWidth = slider.offsetWidth / 2; // ширина одного слайда
let position = 0; // текущая позиция слайдера

// переносим последний слайд перед первым, чтобы реализовать зацикливание
slides.insertBefore(slides.lastElementChild, slides.firstElementChild);

// обработчик клика на кнопку "назад"
prevBtn.addEventListener('click', () => {
    position += slideWidth;
    if (position > 0) {
        // если дошли до первого слайда, переносим последний слайд перед ним
        position = -(slides.offsetWidth - slideWidth);
        slides.style.transform = `translateX(${position}px)`;
        setTimeout(() => {
            slides.style.transition = 'none';
            position += slideWidth;
            slides.style.transform = `translateX(${position}px)`;
        }, 500);
    } else {
        slides.style.transition = 'transform 0.5s ease-in-out';
        slides.style.transform = `translateX(${position}px)`;
    }
});

// обработчик клика на кнопку "вперед"
nextBtn.addEventListener('click', () => {
    position -= slideWidth;
    if (position < -(slides.offsetWidth - slideWidth)) {
        // если дошли до последнего слайда, переносим первый слайд за ним
        position = 0;
        slides.style.transform = `translateX(${position}px)`;
        setTimeout(() => {
            slides.style.transition = 'none';
            position -= slideWidth;
            slides.style.transform = `translateX(${position}px)`;
        }, 500);
    } else {
        slides.style.transition = 'transform 0.5s ease-in-out';
        slides.style.transform = `translateX(${position}px)`;
    }
});
