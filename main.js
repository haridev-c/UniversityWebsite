// export function showMenu() {
//   document.getElementById("logslink").style.right = "0";
// }

// export function hideMenu() {
//   document.getElementById("logslink").style.right = "-100%";
// }

const hamburgerMenu = document.querySelector("#hamburgerMenu");
const closeMenu = document.querySelector("#menuClose");

hamburgerMenu.addEventListener("click", () => {
  document.getElementById("logslink").style.right = "0";
});

closeMenu.addEventListener("click", () => {
  document.getElementById("logslink").style.right = "-100%";
});
