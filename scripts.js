const menuOpenButton = document.getElementById("menu-open-button");

menuOpenButton.addEventListener("click", onMenuButtonOpenClick);

function onMenuButtonOpenClick() {
    document.body.classList.toggle("show-mobile-menu");
}