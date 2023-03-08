const slider = document.querySelector('.slider');
const container = slider.querySelector('.slider__container');
const prevButton = slider.querySelector('.slider-prev');
const nextButton = slider.querySelector('.slider-next');
const items = container.querySelectorAll('.slider__item');
let currentPage = 0;

function updateSlider() {
    for (let i = 0; i < items.length; i++) {
        if (i === currentPage || i === currentPage + 1) {
            items[i].style.display = 'flex';
        } else {
            items[i].style.display = 'none';
        }
    }
}

function prevPage() {
    currentPage--;
    if (currentPage < 0) {
        currentPage = items.length - 2;
    }
    updateSlider();
}

function nextPage() {
    currentPage++;
    if (currentPage > items.length - 2) {
        currentPage = 0;
    }
    updateSlider();
}

prevButton.addEventListener('click', prevPage);
nextButton.addEventListener('click', nextPage);

updateSlider();
