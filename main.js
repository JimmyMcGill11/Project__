// Search box

let search = document.querySelector("nav ul li .search");
let searchBox = document.querySelector("nav .search-box");
let searchInput = document.querySelector("nav .search-box input");
let exit = document.querySelector("nav .exit");

search.addEventListener("click", function (e) {
  e.preventDefault();

  searchBox.style.cssText = "height: calc(100vh + 68px);";
  searchInput.style.cssText = "display: block;";
  exit.style.cssText = "display: flex; justify-content: center; align-items: center;";
});

exit.addEventListener("click", function () {
  searchBox.style.cssText = "height: 0;";
  searchInput.style.cssText = "display: none;";
  exit.style.cssText = "display: none;";
});

// Nav Bar 2

let lastScrollPosition = window.scrollY;
let navBar = document.querySelector(".nav-bottom");
let navBarLinks = document.querySelectorAll(".nav-bottom a");
let navLinks = document.querySelectorAll("nav .nav-bar a");

window.addEventListener("scroll", () => {
  let currentScrollPosition = window.scrollY;

  if (currentScrollPosition < lastScrollPosition) {
    // console.log("Scrolling up!");
    navBar.style.cssText = "position: sticky;";
    navLinks.forEach(l => l.style.cssText = "");
  } else {
    // console.log("Scrolling down or staying still.");
    navBar.style.cssText = "top: -68px";
    navLinks.forEach(l => l.style.cssText = "transform: translateY(-100%);");
  }

  lastScrollPosition = currentScrollPosition;
});
