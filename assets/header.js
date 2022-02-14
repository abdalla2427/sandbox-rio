const burgerButton = document.getElementById('menu-hamburger');


burgerButton.addEventListener('click', () => {
    const elemento = document.getElementById("lista-navegacao");
    elemento.classList.toggle('active');
})
