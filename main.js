const toggleBtn = document.querySelector('.navbar-toggleBtn');
const menu = document.querySelector('.navbar-menu');
const home = document.querySelector('.home-btn');
const about = document.querySelector('.about-btn');
const works = document.querySelector('.works-btn');
const footer = document.querySelector('.footer-btn');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

home.addEventListener('click', () => {
    menu.classList.toggle('active');
})

about.addEventListener('click', () => {
    menu.classList.toggle('active');
})

works.addEventListener('click', () => {
    menu.classList.toggle('active');
})

footer.addEventListener('click', () => {
    menu.classList.toggle('active');
})