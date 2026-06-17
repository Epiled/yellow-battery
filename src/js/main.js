const iconToggle = document.querySelector("[data-toggle]");
const menuList = document.querySelector("[data-menuList]");

iconToggle.addEventListener("click", function () {
  menuList.classList.toggle("menu__list--show");
});

menuList.addEventListener("click", function () {
  menuList.classList.toggle("menu__list--show");
});
