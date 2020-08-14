let isToggle = false;
var navBar = document.getElementById("nav-bar");
var menuItem = document.getElementById("menu-item");
function toggleMenu() {
  if (!isToggle) {
    navBar.style.display = "block";
    menuItem.innerHTML = "Close";
    isToggle = true;
  } else {
    navBar.style.display = "none";
    isToggle = false;
    menuItem.innerHTML = "Menu";
  }
}
