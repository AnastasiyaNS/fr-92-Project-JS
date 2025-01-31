const burger = document.getElementById('burger');
burger.addEventListener('click', function(){
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
})

let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider_block1 .dots li');
let activeBlockOne = 0;
let items = document.querySelectorAll('.slider_block1 .list .item');
let lengthItems = items.length - 1;

function nextToggle(){
    activeBlockOne = activeBlockOne + 1 <= lengthItems ? activeBlockOne + 1 : 0;
    reloadSlider();
}
function prevToggle(){
    activeBlockOne = activeBlockOne - 1 >= 0 ? activeBlockOne - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
    let items = document.querySelectorAll('.slider_block1 .list .item');
    let slider = document.querySelector('.slider_block1 .list');
    slider.style.left = -items[activeBlockOne].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.slider_block1 .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
    active = key;
    reloadSlider();
    })
})