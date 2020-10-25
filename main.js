const toggleBtn = document.querySelector('.navbar-toggleBtn');
const menu = document.querySelector('.navbar-menu');
const home = document.querySelector('.home-btn');
const about = document.querySelector('.about-btn');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

home.addEventListener('click', () => {
    menu.classList.toggle('active');
})

about.addEventListener('click', () => {
    menu.classList.toggle('active');
})