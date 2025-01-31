const burger = document.getElementById('burger');
burger.addEventListener('click', function(){
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
})

let sliderBlock1 = document.querySelector('.slider_block1 .list');
let items = document.querySelectorAll('.slider_block1 .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider_block1 .dots li');

let lengthItems = items.length - 1;
let activeBlock1 = 0;

function nextToggle(){
    activeBlock1 = activeBlock1 + 1 <= lengthItems ? activeBlock1 + 1 : 0;
    reloadSlider();
}

function prevToggle(){
    activeBlock1 = activeBlock1 - 1 >= 0 ? activeBlock1 - 1 : lengthItems;
    reloadSlider();
}

let refreshInterval = setInterval(()=> {next.click()}, 5000);

function reloadSlider(){
    sliderBlock1.style.left = -items[activeBlock1].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.slider_block1 .dots li.activeBlock1');
    last_active_dot.classList.remove('activeBlock1');
    dots[activeBlock1].classList.add('activeBlock1');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
    activeBlock1 = key;
    reloadSlider();
    })
})
