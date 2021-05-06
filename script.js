// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};


// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar

// Get NavBar Height
let navBarHeight = navbar.clientHeight;

// Get about h2
let sticky = navbar.offsetTop;

// Recalc offSet on window rezise
window.onresize = () => {
  sticky = navbar.offsetTop;
  console.log('recalc');
}

let about = document.querySelector('#about');

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    document.querySelector('#about').style.marginTop = '7vh';
  } else {
    navbar.classList.remove("sticky");
    document.querySelector('#about').style.marginTop = '2vh';

  }
}

// event listeners for 'modals' on projects

let project1 = document.querySelector('#project-1 .project-link-buttons')

project1.addEventListener('mouseenter',(e) => {
  targetElement = e.target;
  e.target.classList.add('project-link-active');
})

// clear out on mouse out
project1.addEventListener('mouseleave',(e) => {
  e.target.classList.remove('project-link-active');
})

let project2 = document.querySelector('#project-2 .project-link-buttons')

project2.addEventListener('mouseenter',(e) => {
  targetElement = e.target;
  e.target.classList.add('project-link-active');
})

// clear out on mouse out
project2.addEventListener('mouseleave',(e) => {
  e.target.classList.remove('project-link-active');
})