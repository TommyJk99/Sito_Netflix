//is the element in the viewport?
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight - 30 || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}
//if the element is in the viewport it changes the display to block (by default is d-none)
function showCarousel() {
  let carousel = document.querySelectorAll(".carousel");
  if (isElementInViewport(carousel[2])) {
    carousel[2].classList.remove("hide");
    // window.alert("Il carosello è visibile");
  }
}

// Aggiungi un event listener per verificare lo scrolling
window.addEventListener("scroll", showCarousel);
showCarousel(); //control from the start

$(".carousel").carousel({
  interval: 800000,
});
