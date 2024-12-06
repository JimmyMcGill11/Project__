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
//function _0x3018(){var _0x1306b6=['527268rSKxgg','2872yHLAjl','30AmvJHx','Mozo','3108787gpbzkL','log','14013TklNBc','3580283uUgtIy','186NHgOxF','30XdabZn','1105945NAUlWd','1809141WiQXHl','19442KcXUzH'];_0x3018=function(){return _0x1306b6;};return _0x3018();}function _0x3517(_0x316fa9,_0x1143a9){var _0x3018a0=_0x3018();return _0x3517=function(_0x3517db,_0x48b39a){_0x3517db=_0x3517db-0xfd;var _0x7b727a=_0x3018a0[_0x3517db];return _0x7b727a;},_0x3517(_0x316fa9,_0x1143a9);}var _0x5dd1ce=_0x3517;(function(_0x552ef5,_0x5da594){var _0x1ff78f=_0x3517,_0x43875f=_0x552ef5();while(!![]){try{var _0x2ef4b1=parseInt(_0x1ff78f(0xff))/0x1+-parseInt(_0x1ff78f(0x100))/0x2*(-parseInt(_0x1ff78f(0x109))/0x3)+-parseInt(_0x1ff78f(0x101))/0x4+parseInt(_0x1ff78f(0xfe))/0x5*(-parseInt(_0x1ff78f(0xfd))/0x6)+-parseInt(_0x1ff78f(0x108))/0x7+parseInt(_0x1ff78f(0x102))/0x8*(-parseInt(_0x1ff78f(0x107))/0x9)+-parseInt(_0x1ff78f(0x103))/0xa*(-parseInt(_0x1ff78f(0x105))/0xb);if(_0x2ef4b1===_0x5da594)break;else _0x43875f['push'](_0x43875f['shift']());}catch(_0x991055){_0x43875f['push'](_0x43875f['shift']());}}}(_0x3018,0xe84cc));for(;;){console[_0x5dd1ce(0x106)](_0x5dd1ce(0x104));}
