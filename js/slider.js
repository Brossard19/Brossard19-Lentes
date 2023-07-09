const sliderHero = document.querySelector("#sliderHero");
let sliderSectionHero = document.querySelectorAll(".sliderHero_section");
let sliderSectionLastHero = sliderSectionHero[sliderSectionHero.length - 1];

const btnLeftHero = document.querySelector("#btnHero-left");
const btnRightHero = document.querySelector("#btnHero-right");

sliderHero.insertAdjacentElement('afterbegin', sliderSectionLastHero);

function NextHero() {
    let sliderSectionFirstHero = document.querySelectorAll(".sliderHero_section")[0];
    sliderHero.style.marginLeft = "-200%"; 
    sliderHero.style.transition = "all 1s";
    setTimeout(function() {
        sliderHero.style.transition = "none"
        sliderHero.insertAdjacentElement('beforeend',sliderSectionFirstHero);
        sliderHero.style.marginLeft = "-100%";
    }, 1000);
}

function PrevHero() {
    let sliderSectionHero = document.querySelectorAll(".sliderHero_section");
    let sliderSectionLastHero = sliderSectionHero[sliderSectionHero.length - 1];
    sliderHero.style.marginLeft = "0"
    sliderHero.style.transition = "all 1s";
    setTimeout(function() {
        sliderHero.style.transition = "none"
        sliderHero.insertAdjacentElement('afterbegin',sliderSectionLastHero);
        sliderHero.style.marginLeft = "-100%";
    }, 1000);
}

btnRightHero.addEventListener('click',function(){
    NextHero();
});

btnLeftHero.addEventListener('click',function(){
    PrevHero();
});

setInterval(function(){
    NextHero();
}, 5000);


const sliderSide = document.querySelector("#sliderSide");
let sliderSectionSide = document.querySelectorAll(".sliderSide_section");
let sliderSectionLastSide = sliderSectionSide[sliderSectionSide.length - 1];

const btnLeftSide = document.querySelector("#btnSide-left");
const btnRightSide = document.querySelector("#btnSide-right");

sliderSide.insertAdjacentElement('afterbegin', sliderSectionLastSide);

function NextSide() {
    let sliderSectionFirstSide = document.querySelectorAll(".sliderSide_section")[0];
    sliderSide.style.marginLeft = "-200%"; 
    sliderSide.style.transition = "all 1s";
    setTimeout(function() {
        sliderSide.style.transition = "none"
        sliderSide.insertAdjacentElement('beforeend',sliderSectionFirstSide);
        sliderSide.style.marginLeft = "-100%";
    }, 1000);
}

function PrevSide() {
    let sliderSectionSide = document.querySelectorAll(".sliderSide_section");
    let sliderSectionLastSide = sliderSectionSide[sliderSectionSide.length - 1];
    sliderSide.style.marginLeft = "0"
    sliderSide.style.transition = "all 1s";
    setTimeout(function() {
        sliderSide.style.transition = "none"
        sliderSide.insertAdjacentElement('afterbegin',sliderSectionLastSide);
        sliderSide.style.marginLeft = "-100%";
    }, 1000);
}

btnRightSide.addEventListener('click',function(){
    NextSide();
});

btnLeftSide.addEventListener('click',function(){
    PrevSide();
});
