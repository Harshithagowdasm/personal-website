// Particles
particlesJS("particles-js",{
  particles:{
    number:{value:80},
    color:{value:"#d946ef"},
    size:{value:3}
  }
});

// Typed Text
new Typed("#typed",{
  strings:["Web Developer","AI Enthusiast","UI Designer"],
  typeSpeed:60,
  backSpeed:40,
  loop:true
});

// Scroll Reveal
ScrollReveal().reveal(".reveal",{
  distance:"60px",
  duration:1200,
  origin:"bottom"
});

// 3D Tilt
VanillaTilt.init(document.querySelectorAll(".tilt"),{
  max:15,
  speed:400,
  glare:true,
  "max-glare":0.3
});

// Active Navbar Highlight
const links = document.querySelectorAll(".nav-link");
window.addEventListener("scroll",()=>{
  let fromTop = window.scrollY + 100;
  links.forEach(link=>{
    let section = document.querySelector(link.getAttribute("href"));
    if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
