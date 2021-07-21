let windowWidth = window.innerWidth;
if (windowWidth <= 700) {
  const menuBtn = document.querySelector(".menu-btn");
  const mainMenu = document.getElementById("main-menu");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
      mainMenu.hidden = !mainMenu.hidden;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
      mainMenu.hidden = !mainMenu.hidden;
    }
  });

  const menuBtnBurger = document.querySelector(".menu-btn__burger");
}

const splide = document.querySelector(".splide");

if (splide != null) {
  new Splide(".splide", {
    type: "loop",
    autoplay: true,
    interval: 8000,
  }).mount();
}
