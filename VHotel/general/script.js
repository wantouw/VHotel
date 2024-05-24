const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navLinks");


hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
})

document.querySelectorAll(".navLinks").forEach(i => i.addEventListener("click", function() {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}))

var logo=document.getElementById("homeLogo");
var navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
  var position = window.scrollY
  if(position>0){
    navbar.classList.add("change")
    logo.src = "../res/Logo.png";
  }
  else{
    navbar.classList.remove("change")
    logo.src = "../res/Logo2.png";
  }
})

