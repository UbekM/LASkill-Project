/** @format */

const wallet_button = document.getElementById("wallet-button");
const backdrop = document.getElementById("backdrop");

wallet_button.addEventListener("click", () => {
  backdrop.style.display = "block";
});

document.addEventListener("click", (event) => {
  if (event.target !== wallet_button && event.target !== wallet) {
    wallet.style.display = "none";
  }
});
