const menuBtn = document.getElementById("menu");
const sideBar = document.getElementById("sideBar");
let side = false;
menuBtn.addEventListener("click", () => {
  if (side === false) {
    sideBar.style.display = "flex";
    side = true;
  } else {
    sideBar.style.display = "none";
    side = false;
  }
});
