const grosNuage = document.querySelector("#grosnuage");
const petitNuage = document.querySelector("#petitnuage");


const videoChat = document.querySelector("#videochat");
const carroussel = document.querySelector(".carroussel-wrapper");
const logo = document.querySelector("#logo");
const story = document.querySelector("#\\#story > h2");

// definition des nodelists sections
const storySection = document.querySelectorAll("#story");
const studioSection = document.querySelectorAll("#studio");
const placeSection = document.querySelectorAll("#place");
const bannerSection = document.querySelectorAll(".banner");

const video = document.querySelector("#primary > section.banner > video");

// nav
// const mainNavigation = document.querySelector(".main-navigation");
const siteNavigation = document.getElementById("site-navigation");
const button = siteNavigation.getElementsByTagName("button")[0];

let span1 = document.querySelector("#site-navigation > div.nav-menu-me > button > span:nth-child(1)");
let span2 = document.querySelector("#site-navigation > div.nav-menu-me > button > span:nth-child(2)");
let span3 = document.querySelector("#site-navigation > div.nav-menu-me > button > span:nth-child(3)");

const menuDown = document.querySelector("#site-navigation > .container-ul");
const menuLi = document.querySelectorAll("#site-navigation > div.container-ul > ul > li > a");

// const fleur1 = document.querySelector(".story__article > p");
const imagesMenu = document.querySelector(".images-menu");

const logoMenu = document.querySelector("#logo-menu");
const p = document.querySelectorAll("p");

const flower1 = document.querySelector('#story > h2');
const flower2 = document.querySelector('#studio > h2');
const flower3 = document.querySelector('#colophon');
const flower4 = document.querySelector('#story > article.story__article');

const arrFlowers = [flower1, flower2, flower3, flower4];


//------------------------------------------BUTTON----------------------------------------
function resizeF() {
  if (window.innerWidth <= 992) {
    imagesMenu.setAttribute("hidden", true);
    // window.addEventListener('resize', removeSlideInleft());
  } else {
    imagesMenu.removeAttribute("hidden");
    // window.addEventListener('resize', slideInleft());
  }
}
window.addEventListener("resize", () => {
 if(window.innerWidth <= 668){
  video.setAttribute('hidden', true);
}else{
  video.removeAttribute('hidden');
}
});

//mediaqueries
if (window.matchMedia("(max-width: 668px)").matches ) {
 video.setAttribute('hidden', true);
}else{
  video.removeAttribute('hidden');
}
//creation du menu hamburger en js

// nettoyer ce code ci dessous !!! faire des functions
button.addEventListener("click", function () {
  function hideMenu (){
    imagesMenu.setAttribute("hidden", true);
    menuDown.setAttribute("hidden", true);
    logoMenu.setAttribute("hidden", true);
  }
  if (button.getAttribute("aria-expanded") === "true") {
    // menu ouvert
    span1.style.transform = "rotate(0deg)";
    span2.style.visibility = "visible";
    span3.style.transform = "rotate(0deg)";
    menuDown.classList.remove("slide-in-menu");
    hideMenu();
  } else {
    span1.style.transform = "rotate(45deg)";
    span2.style.visibility = "hidden";
    span3.style.transform = "rotate(-45deg)";
    menuDown.classList.add("slide-in-menu");
    menuDown.removeAttribute("hidden");
    imagesMenu.removeAttribute("hidden");
    menuLi.forEach((element) => {
      element.addEventListener("click", (e) => {
        hideMenu();
        span1.style.transform = "rotate(0deg)";
        span2.style.visibility = "visible";
        span3.style.transform = "rotate(0deg)";
      });
      menuLi.forEach((element) => {
        element.classList.add("slide-in-top-parallax");
      });
    });
    resizeF();
    window.addEventListener("resize", () => {
      resizeF();
    });
  
  }
});

//------------------------------------DOMCONTENTLOADED---------------------------------------

// test d ajout de la classe slide-in-top seulement sur les textes p et img
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("p").forEach((element) => {
    if (!element.classList.contains("site-title") && !element.classList.contains("fixed")) {
      element.classList.add("slide-in-top-parallax");
    }
  });

  let arraySection = [bannerSection, storySection, placeSection, studioSection];

  for (const section of arraySection) {
    if (section === arraySection[0]) {
      // test d ajout de la classe slide-in-top seulement sur les textes p et img
      // videoChat.classList.add('slide-in-top');
      logo.classList.add("slide-in-bottom");
      setTimeout(() => {
        logo.classList.add("alternate");
        logo.classList.remove("slide-in-bottom");
      }, 2500);
    }
    if (section === arraySection[1] || section === arraySection[3]) {
      section.forEach((element) => {
        if (!element.classList.contains("slide-in-top-parallax")) {
          element.classList.add("slide-in-bottom");
        }
      });
    }
    if (section === arraySection[2]) {
      section.forEach((element) => {
        if (!element.classList.contains("slide-in-top-parallax") || !element.classList.contains("slide-in-left") || !element.classList.contains("slide-in-left-fast")) {
          element.classList.add("slide-in-bottom");
        }
      });
    }
  }
});

// scroll des nuages
window.addEventListener("scroll", () => {
  // voici la valeur de défilement en pixels
  let scrollValue = window.scrollY;

  // Calculer la valeur de déplacement horizontal en fonction du défilement
  let translateValue = scrollValue * 0.7; // le facteur de multiplication

  // passer la valeur pour lui appliquer le decalage
  grosNuage.style.transform = `translateX(-${translateValue}px)`;
  petitNuage.style.transform = `translateX(-${translateValue}px)`;

});

//----------------------------carroussel de personnages------------------------------------------------
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 70,
    modifier: 1,
    slideShadows: false,
  },
});

//-------------------------------le scroll rapide des fleurs -----------------------------------------------

function handleScroll(animationDuration) {
  for (let index = 0; index < arrFlowers.length; index++) {
    arrFlowers[index].style.setProperty('--animation-duration', animationDuration); 
  }
    
  };
//initialise la variable de defilement a false
  let isScrolling = false;

window.addEventListener('scroll', function() {
 // quand il y a scroll passe a true
  isScrolling = true;
});
//le setInterval verifie tt les 100 ms si il est a true lui passe la valeur 1s
setInterval(function() {
  if (isScrolling) {
    handleScroll('1s');
    isScrolling = false; // Réinitialise 
  } else {
    //si il y a pas de scroll alors remets a 21s
    handleScroll('21s');
  }
}, 100);

// refaire ce nuage orange si j'ai le temps
//verifier les const inutilisés
// nettoyer le code...

