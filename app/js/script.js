console.log('Hi');

const btn = document.querySelector('.header__btn');
const menu = document.querySelector('.header__links');
const links = document.querySelector('.links--item');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    body.classList.toggle('noscroll');
    menu.classList.toggle('fade-in');
    menu.classList.toggle('fade-out');
    // if (links.addEventListener('click')) {
    //     btn.classList.toggle('open');
    // }
});

links.addEventListener('click', () => {
    console.log('link ke klik');
});
