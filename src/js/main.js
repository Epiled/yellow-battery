const iconeHamburguer = document.querySelector("[data-iconeHamburguer]");
const menuLista = document.querySelector("[data-menuLista]");

iconeHamburguer.addEventListener("click", function(){
    menuLista.classList.toggle('menu__lista--show');
});

menuLista.addEventListener("click", function(){
    menuLista.classList.toggle('menu__lista--show');
});
  