/** @format */

const wallet_button = document.getElementById("wallet-button");
const backdrop = document.getElementById("backdrop");
const wallet = document.getElementById("wallet");
const svg = document.getElementById("svg");

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
