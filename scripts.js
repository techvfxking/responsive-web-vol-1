const navlinks = document.querySelectorAll(".nav-menu .nav-link");
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

navlinks.forEach(function (link) {
    link.addEventListener("click", function () {
        onMenuButtonCloseClick();
    });
});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 25,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3

        }
    }
});