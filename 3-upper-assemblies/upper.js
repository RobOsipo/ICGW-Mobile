
// jQuery for Hero Section 

$('a.company-name').hide();
$('p.hero-text').hide();

setTimeout(() => {
    $('a.company-name').fadeIn();
}, 500)

setTimeout(() => {
    $('p.hero-text').fadeIn();
}, 1150)


// This is for my Navigation hamburger menu ///
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);