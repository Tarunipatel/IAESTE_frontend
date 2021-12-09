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
        },7000)
    }
    repeater();
}
repeat();
const manualNav = (manual)=>
{
    slides.forEach((slide)=>
    {
        slide.classList.remove('active');
    })
    buttons.forEach((button)=>
    {
        button.classList.remove('active');
    })
    slides[manual].classList.add('active');
    buttons[manual].classList.add('active');
}

buttons.forEach((button,i)=>
{
    button.addEventListener('click',()=>
    {
        manualNav(i);
        currentSlide = i;
    })
})

$(document).ready(function()
{
  $(".counter").counterUp({
    delay:10,
    time:1200
  });
});