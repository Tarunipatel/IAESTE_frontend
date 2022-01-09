const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.btn');

const currentSlide = 1;
const repeat = ()=>
{
    let i=0;
    const active = document.getElementsByClassName('active');
    const repeater = ()=>
    {
        setTimeout(()=>
        {
            [...active].forEach((activeClass)=>
            {
                activeClass.classList.remove('active');
            })
            slides[i].classList.add('active');
            buttons[i].classList.add('active');
            i++;
            if(i==slides.length)
            {
                i=0;
            }
            if(i>=slides.length)
            {
                return;
            }
            repeater();
        },6500);
    }
    repeater();
}
repeat();
const manualNav = (manual) => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
    buttons.forEach((button) => {
        button.classList.remove('active');
    })
    slides[manual].classList.add('active');
    buttons[manual].classList.add('active');
}

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        manualNav(i);
        currentSlide = i;
    })
})
$(document).ready(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 1400
    });
});
const country = document.querySelector('.countries');
const images = ['France','Canada','Switzerland','Australia','Greece'];
const countryName = document.querySelector('#countryName');
const countryChange = () => {
    let i = 0;
    const rep = () => {
        setTimeout(() => 
        {
            countryName.innerText = `${images[i]}`;
            country.src = `Countries/${images[i]}.jpg`;
            i++;
            if (i == images.length) {
                i = 0;
            }
            if (i >= images.length) {
                return;
            }
            rep();
        }, 1000)
    }
    rep();
}
countryChange();

const manualBlock = (current)=>
{
    blocks.forEach((block)=>
    {
        block.classList.add('active');
    })
    blocks.forEach((block)=>
    {
        block.classList.remove('active');
    })
    blocks[current].classList.add('active');
}
const currentBlock = 1;
const blocks = document.querySelectorAll('.block');
blocks.forEach((block,j)=>
{
    block.addEventListener('click',()=>
    {
        manualBlock(j);
        currentBlock = j;
    })
})



