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
        },10000);
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
        time: 1600
    });
});
const country = document.querySelector('.countries');
const images = ['France', 'Canada', 'Switzerland', 'Australia', 'Greece'];
const countryName = document.querySelector('#countryName');
const countryChange = () => {
    let i = 0;
    const rep = () => {
        setTimeout(() => {
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

const manualBlock = (current) => {
    blocks.forEach((block) => {
        block.classList.add('active');
    })
    blocks.forEach((block) => {
        block.classList.remove('active');
    })
    blocks[current].classList.toggle('active');
}
const currentBlock = 1;
const blocks = document.querySelectorAll('.block');
const block1 = document.querySelector('.block.block1');
const block2 = document.querySelector('.block.block2');
const block3 = document.querySelector('.block.block3');
const block4 = document.querySelector('.block.block4');



const block1Para = document.querySelector('.block1Para');
const block2Para = document.querySelector('.block2Para');
const block3Para = document.querySelector('.block3Para');
const block4Para = document.querySelector('.block4Para');


block1.addEventListener('click', () => {
    blocks.forEach((block) => {
        block.classList.toggle('notVisible');
    })
    block1.classList.remove('notVisible');
    block1.classList.toggle('active');
    block1Para.classList.toggle('active');
})
block2.addEventListener('click', () => {
    blocks.forEach((block) => {
        block.classList.toggle('notVisible');
    })
    block2.classList.remove('notVisible');
    block2.classList.toggle('active');
    block2Para.classList.toggle('active');
})
block3.addEventListener('click', () => {
    blocks.forEach((block) => {
        block.classList.toggle('notVisible');
    })
    block3.classList.remove('notVisible');
    block3.classList.toggle('active');
    block3Para.classList.toggle('active');
})
block4.addEventListener('click', () => {
    blocks.forEach((block) => {
        block.classList.toggle('notVisible');
    })
    block4.classList.remove('notVisible');
    block4.classList.toggle('active');
    block4Para.classList.toggle('active');
})

const prevButton = document.querySelector('.prev_button');
const nextButton = document.querySelector('.next_button');

let k = 0;
prevButton.addEventListener('click', () => 
{
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
    buttons.forEach(button => {
        button.classList.remove('active');
    })
    k--;
    if(k<0)
    {
        k = 0;
    }
    slides[k].classList.add('active');
    buttons[k].classList.add('active');
})
nextButton.addEventListener('click', () => {
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
    buttons.forEach(button => {
        button.classList.remove('active');
    })
    k++;
    if(k==slides.length)
    {
        k = 0;
    }
    slides[k].classList.add('active');
    buttons[k].classList.add('active');
})
