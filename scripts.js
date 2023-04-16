const nav = document.querySelector (".nav-bar"); 
const open = document.querySelector(".menu-mobile");
const close = document.querySelector(".close-menu");

open.addEventListener("click", () => {
  nav.classList.add("open-navbar")
});

close.addEventListener("click", () => {
  nav.classList.remove("open-navbar")
});