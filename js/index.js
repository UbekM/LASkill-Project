/** @format */

const wallet_button = document.getElementById("wallet-button");
const backdrop = document.getElementById("backdrop");
const wallet = document.getElementById("wallet");
const svg = document.getElementById("svg");
const hamburgerIcon = document.getElementById("logo2");
const menu = document.getElementById("menu2");
const searchIcon = document.getElementById("search-top");
const search = document.getElementById("search-container2");

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

function toggleMenu() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
    console.log(menu.style.display);
  } else {
    menu.style.display = "none";
  }
}

hamburgerIcon.addEventListener("click", toggleMenu);

function toggleSearch() {
  if (search.style.display === "none") {
    search.style.display = "block";
  } else {
    search.style.display = "none";
  }
}

searchIcon.addEventListener("click", toggleSearch);
