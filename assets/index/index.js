const burgerButton = document.getElementById('menu-hamburger');
console.log(burgerButton)
burgerButton.addEventListener('click', () => {
    const elemento = document.getElementById("lista-navegacao");
    console.log('a')
    elemento.classList.toggle('active');
})
