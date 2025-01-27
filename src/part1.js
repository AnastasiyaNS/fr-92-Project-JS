const burger = document.getElementById('burger');
export burger.addEventListener('click', function(){
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
})

export let next = document.getElementById('next');
export let prev = document.getElementById('prev');
export let dots = document.querySelectorAll('.slider .dots li');


export function nextToggle(){
    let items = document.querySelectorAll('.slider .list .item');
    let lengthItems = items.length - 1;
    let active = 0;
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}

export function prevToggle(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}

export let refreshInterval = setInterval(()=> {next.click()}, 5000);

export function reloadSlider(){
    let items = document.querySelectorAll('.slider .list .item');
    let slider = document.querySelector('.slider .list');
    slider.style.left = -items[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);
}

export dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
    active = key;
    reloadSlider();
    })
})