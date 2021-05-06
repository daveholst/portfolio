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

let projectsArray = document.querySelectorAll('.project-link-buttons')

projectsArray.forEach(project => {
  // add active class to show 'modal
  project.addEventListener('mouseenter', (e) => {
    e.target.classList.add('project-link-active');
  })

  // clear out on mouse out
  project.addEventListener('mouseleave',(e) => {
    e.target.classList.remove('project-link-active');
  })
});