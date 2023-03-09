const boxList = document.getElementsByClassName('slider__container')[0];
const boxChi = boxList.children;
const len = boxChi.length;
const prevs = document.getElementsByClassName('prev')[0];
const nexts = document.getElementsByClassName('next')[0];
let num = 1;

nexts.onmousedown = function () {
    if (num == len - 2) {
        boxList.style.transition = '0s';
        num = 0;
        boxList.style.left = num * -500 + 'px';
    }
};
nexts.onmouseup = function () {
    num++;
    boxList.style.left = num * -500 + 'px';
    boxList.style.transition = '0.5s';
};

prevs.onmousedown = function () {
    if (num == 0) {
        boxList.style.transition = '0s';
        num = len - 2;
        boxList.style.left = num * -500 + 'px';
    }
};
prevs.onmouseup = function () {
    num--;
    boxList.style.left = num * -500 + 'px';
    boxList.style.transition = '0.5s';
};
