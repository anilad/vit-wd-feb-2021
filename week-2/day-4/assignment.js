var count = 0;
function left() {
    var carousel = document.getElementById('jsSlider');
    switch (count) {
        case 0:
            carousel.style.transform = 'translate(-300px)';
            count ++;
            break;
        case 1:
            carousel.style.transform = 'translate(-600px)';
            count ++;
            break;
        case 2:
            carousel.style.transform = 'translate(-900px)';
            count ++;
            break;
        case 3:
            carousel.style.transform = 'translate(-1200px)';
            count ++;
            break;
        case 4:
            carousel.style.transform = 'translate(-1500px)';
            count ++;
            break;
        case 5:
            carousel.style.transform = 'translate(-1800px)';
            count ++;
            break;
        case 6:
            carousel.style.transform = 'translate(-2100px)';
            count ++;
            break;
        case 7:
            carousel.style.transform = 'translate(-2400px)';
            count ++;
            break;
        case 8:
            carousel.style.transform = 'translate(0px)';
            count = 0;
            break;
    }
    console.log(count)
};
function right() {
    var carousel = document.getElementById('jsSlider');
    switch (count) {
        case 0:
            carousel.style.transform = 'translate(-2400px)';
            count = 8;
            break;
        case 1:
            carousel.style.transform = 'translate(0px)';
            count--;
            break;
        case 2:
            carousel.style.transform = 'translate(-300px)';
            count--;
            break;
        case 3:
            carousel.style.transform = 'translate(-600px)';
            count--;
            break;
        case 4:
            carousel.style.transform = 'translate(-900px)';
            count--;
            break;
        case 5:
            carousel.style.transform = 'translate(-1200px)';
            count--;
            break;
        case 6:
            carousel.style.transform = 'translate(-1500px)';
            count--;
            break;
        case 7:
            carousel.style.transform = 'translate(-1800px)';
            count--;
            break;
        case 8:
            carousel.style.transform = 'translate(-2100px)';
            count --;
            break;
    }
    console.log(0)
}
document.getElementById('left').addEventListener("click", function () {
    left();
});
document.getElementById('right').addEventListener('click', function () {
    right();
})
