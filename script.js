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
 