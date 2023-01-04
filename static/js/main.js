const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>
    item.addEventListener('click', () => {
        const { itemValue } = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
    })
    );

new Swiper('.image-slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
    el: '.swiper-pagination',

    clickable: true,
    },
});

const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const body = document.body;

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
    body.classList.toggle('noscroll');
});

const navLinks = document.querySelectorAll('.header__link');

navLinks.forEach(item =>
    item.addEventListener('click', () => {
        nav.classList.toggle('menu-open');
        body.classList.toggle('noscroll');
    })
);



