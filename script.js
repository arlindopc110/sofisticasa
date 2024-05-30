const menuMobile = document.querySelector('.menu_mobile');
const menuBurguer = document.querySelector('.menu_burguer');
const menuInvertidoBotao = document.querySelector('.menu_burguer_invertido');

function mobile() {
    menuMobile.style.display = 'block';
}

function menuInvertido() {
    menuMobile.style.display = 'none';
}

menuBurguer.addEventListener('click', mobile);
menuInvertidoBotao.addEventListener('click', menuInvertido);


// Garante que o menu esteja oculto ao recarregar a página
window.addEventListener('load', () => {
    menuMobile.style.display = 'none';
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', function (event) {
    if (menuMobile.style.display === 'block' && !menuMobile.contains(event.target) && !menuBurguer.contains(event.target)) {
        menuMobile.style.display = 'none';
    }
});