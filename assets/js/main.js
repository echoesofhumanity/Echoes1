document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu-items");

    if (button && menu) {

        button.addEventListener("click", () => {

            menu.classList.toggle("active");

        });

    }

});
