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

// Select navigation links and close navbar
// Set the checked attribute on the type=checkbox
const links = document.querySelectorAll('.links a')
const checkbox = document.querySelector('#nav-toggle')

for ( const link of links ) {
  link.onclick = handleClick
}

function handleClick() {
  checkbox.checked = false
}
