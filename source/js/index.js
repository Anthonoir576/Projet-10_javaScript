// Variable / Constante 
let navbar = document.getElementById('navbar');
let navElements = document.getElementById('nav-elements');

window.addEventListener('scroll', function() {

    const scroll = this.document.documentElement.scrollTop;

    if (scroll > 150) {

        navbar.style.height = "5vh";
        navElements.style.height = "5vh";
        navbar.style.background = 'rgba(52, 187, 255, 0.801)';


    } else {

        navbar.style.height = "10vh";
        navElements.style.height = "10vh";
        navbar.style.background = 'rgb(52, 187, 255)';


    }

});