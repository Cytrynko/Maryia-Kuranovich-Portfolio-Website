// Sticky Header
let home = document.getElementById("home");
let header = document.getElementById("header");
let navPos = header.getBoundingClientRect().top;
let navbarLinks = document.querySelectorAll(".nav_link");

window.addEventListener("scroll", (e) => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    header.classList.add("sticky");
    home.classList.add("navbarOffsetMargin");
  } else {
    header.classList.remove("sticky");
    home.classList.remove("navbarOffsetMargin");
  } 

  navbarLinks.forEach((link) => {
    let section = document.querySelector(link.hash);
    if (
      scrollPos + 150 > section.offsetTop &&
      scrollPos + 150 < section.offsetTop + section.offsetHeight
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Read More
const moreText = document.getElementById("more");
const btnText = document.querySelector(".icon");
const dots = document.getElementById("dots");

btnText.addEventListener("click", readMore);
function readMore() {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btnText.style.transform = "rotate(0deg)";
  } else {
    dots.style.display = "none";
    moreText.style.display = "block";
    btnText.style.transform = "rotate(180deg)";
  }
}
