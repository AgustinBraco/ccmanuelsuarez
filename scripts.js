const nav = document.querySelector (".nav-bar"); 
const open = document.querySelector(".menu-mobile");
const close = document.querySelector(".close-menu");

open.addEventListener("click", () => {
  nav.classList.add("open-navbar")
});

close.addEventListener("click", () => {
  nav.classList.remove("open-navbar")
});

import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
import PhotoSwipe from '/photoswipe/photoswipe.esm.js';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--no-dynamic-import',
  children: 'a',
  pswpModule: PhotoSwipe
});

lightbox.init();