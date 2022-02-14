const clickCard = (elemento) => {
    const el = elemento.getElementsByClassName('conteudo-card-faq')[0];
    console.log(el)

    el.classList.toggle('active');
}
