document.addEventListener("DOMContentLoaded", () => {

  /* ==================================================
     HAMBURGER MENU
     ================================================== */

  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu-items");

  if (menuButton && menu) {

    menuButton.addEventListener("click", () => {

      menu.classList.toggle("active");

    });

  }


  /* ==================================================
     LANGUAGE MENU
     ================================================== */

  const languageGlobe = document.querySelector(".language-globe");
  const languageButton = document.querySelector(".language-button");

  if (languageGlobe && languageButton) {

    languageButton.addEventListener("click", (event) => {

      event.stopPropagation();

      languageGlobe.classList.toggle("active");

    });


    document.addEventListener("click", (event) => {

      if (!languageGlobe.contains(event.target)) {

        languageGlobe.classList.remove("active");

      }

    });

  }

});
