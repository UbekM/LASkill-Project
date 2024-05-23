/** @format */

const wallet_button = document.getElementById("wallet-button");
const backdrop = document.getElementById("backdrop");
const wallet = document.getElementById("wallet");
const svg = document.getElementById("svg");
const hamburgerIcon = document.getElementById("logo2");
const menu = document.getElementById("menu2");
const searchIcon = document.getElementById("search-top");
const search = document.getElementById("search-container");

function toggleMenu() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
    console.log(menu.style.display);
  } else {
    menu.style.display = "none";
  }
}

wallet_button.addEventListener("click", () => {
  backdrop.style.display = "block";
  document.body.style.overflow = "hidden";
});

document.addEventListener("click", (event) => {
  if (event.target == backdrop || event.target == svg) {
    backdrop.style.display = "none";
    document.body.style.overflow = "visible";
  }
});

hamburgerIcon.addEventListener("click", toggleMenu);

searchIcon.addEventListener("click", () => {
  search.style.display = "block";
});
