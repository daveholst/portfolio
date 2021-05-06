// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Get NavBar Height
let navBarHeight = navbar.clientHeight;

// Get about h2

let about = document.querySelector('#about');

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    document.querySelector('#about').style.marginTop = '70px';
  } else {
    navbar.classList.remove("sticky");
    document.querySelector('#about').style.marginTop = '20px';

  }
}