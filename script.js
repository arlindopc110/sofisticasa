const menuMobile = document.querySelector('.menu-mobile');
const menuBurguer = document.querySelector('.menu-burguer');
const menuInvertidoBotao = document.querySelector('.menu-burguer-invertido');

function mobile() {
    menuMobile.style.display = 'block';
}

function menuInvertido() {
    menuMobile.style.display = 'none';
}

menuBurguer.addEventListener('click', mobile);
menuInvertidoBotao.addEventListener('click', menuInvertido);
 