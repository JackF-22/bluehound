let burger = document.querySelector('.burgermenu');
let dropmenu = document.querySelector('.dropmenu');

function burgermenu() {
    burger.classList.toggle('activemenu');
    dropmenu.classList.toggle('active');
}

var prevScrollpos = window.scrollY;
window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else if (prevScrollpos < currentScrollPos && window.scrollY > 100 && !(dropmenu.classList.contains("active"))) {
        document.getElementById("navbar").style.top = "-75px";
    }
    prevScrollpos = currentScrollPos;
}

function decorate(clicked) {
    let current = document.querySelector('.active_link');

    if (clicked.href == 'https://www.tbdine.com/book/restaurant/blue-hound-cookery-and-taproom?idApp=71111&language=en-us') {
        return;
    }

    current.classList.remove("active_link");
    clicked.classList.add("active_link");
}

window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveals');

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 0;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
  }
}


function loadmain() {
    var topreveals = document.querySelector('.topreveals');
    topreveals.classList.add('active');
}