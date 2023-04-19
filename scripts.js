const nav = document.querySelector (".nav-bar"); 
const open = document.querySelector(".menu-mobile");
const close = document.querySelector(".close-menu");
const banner = document.querySelector(".banner-image");
const arrow = document.querySelector(".scroll-arrow-container");

open.addEventListener("click", () => {
  nav.classList.add("open-navbar")
});

close.addEventListener("click", () => {
  nav.classList.remove("open-navbar")
});

window.addEventListener("scroll", () => {
  let scroll = window.scrollY
  banner.style.top = scroll * 0.5 + "px";
  banner.style.webkitFilter = `blur(${scroll * 0.005}px)`;
  arrow.style.bottom = scroll * 1 + "px";
});