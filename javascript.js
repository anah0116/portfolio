// variabler til burgermenu
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu_liste");

// buger menu toggle
burger.addEventListener("click", burgermenu);

function burgermenu() {
  //   burger.classList.toggle("aktiv");
  menu.classList.toggle("aktiv");
}

document.querySelector(".nav_link").addEventListener("click", menu_link_klikket);
function menu_link_klikket() {
  burger.classList.remove("aktiv");
  menu.classList.remove("aktiv");
}
