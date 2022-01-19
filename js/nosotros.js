
const menuMobile = document.getElementById('menu-mobile');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    console.log('click')
    menuMobile.classList.toggle('menu-items');
})