var slideImages = document.querySelectorAll('.slide');
current = 0;

function reset() {
    for (var i = 0; i < slideImages.length; i++) {
        slideImages[i].style.display = "none";
    }
}

function startSlider() {
    reset();
    slideImages[0].style.display = "block";
}
startSlider();
// prev slide
function leftSlide() {
    reset();
    slideImages[current - 1].style.display = "block";
    current--;
}
// next slide
function rightSlide() {
    reset();
    slideImages[current + 1].style.display = "block";
    current++;
}
// arrow key press
// left Key
leftArrow.onclick = function () {
    if (current === 0) {
        current = slideImages.length;
    }
    leftSlide();
}
// right Key
rightArrow.onclick = function () {
    if (current === slideImages.length - 1) {
        current = -1;
    }
    rightSlide();
}

function autoslider() {
    if (current === slideImages.length - 1) {
        current = -1;
    }
    rightSlide();
    setTimeout(autoslider, 5000)
}
autoslider();

var navbarElement=document.getElementById('nav');
var scrollHeight=screen.height-70;
function scrollChanger(){
    if(window.scrollY>scrollHeight){
        navbarElement.classList.remove("transparent");
        navbarElement.classList.add("red");
    }
    if(window.scrollY<scrollHeight){
        navbarElement.classList.remove("red");
        navbarElement.classList.add("transparent");
    }
}