// Scroll Up Button
const scrollButton = document.querySelector(".scroll-up-btn");

window.onscroll = function() {scrollUp()};

function scrollUp() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}
scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
