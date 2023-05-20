let menu = document.querySelector('.menu');
let list = document.querySelector('ul');

menu.addEventListener('click', () => {
    list.classList.toggle('open');
    menu.classList.toggle('fa-close');
})