const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");

menuOpenButton.addEventListener("click", onMenuButtonOpenClick);
menuCloseButton.addEventListener("click", onMenuButtonCloseClick);


function onMenuButtonOpenClick() {
    document.body.classList.toggle("show-mobile-menu");
}

function onMenuButtonCloseClick() {
   menuOpenButton.click();
}