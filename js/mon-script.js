const grosNuage = document.querySelector("#grosnuage");
const petitNuage = document.querySelector("#petitnuage");
// const trespetitnuage = document.querySelector("#trespetitnuage");

const videoChat = document.querySelector("#videochat");
const carroussel = document.querySelector(".carroussel-wrapper");
const logo = document.querySelector("#logo");
const story = document.querySelector("#\\#story > h2");

// definition des nodelists sections
const storySection = document.querySelectorAll("#story");
const studioSection = document.querySelectorAll("#studio");
const placeSection = document.querySelectorAll("#place");
const bannerSection = document.querySelectorAll(".banner");

// nav
const mainNavigation = document.querySelector(".main-navigation");
const siteNavigation = document.getElementById("site-navigation");
const button = siteNavigation.getElementsByTagName("button")[0];

let span1 = document.querySelector("#site-navigation > div.nav-menu-me > button > span:nth-child(1)");
let span2 = document.querySelector("#site-navigation > div.nav-menu-me > button > span:nth-child(2)");
let span3 = document.querySelector("#site-navigation > div.nav-menu-me > button > span:nth-child(3)");

const menuDown = document.querySelector("#site-navigation > .container-ul");
const menuLi = document.querySelectorAll("#site-navigation > div.container-ul > ul > li > a");

const fleur1 = document.querySelector(".story__article > p");
const imagesMenu = document.querySelector(".images-menu");

const logoMenu = document.querySelector("#logo-menu");
const p = document.querySelectorAll("p");

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
//creation du menu hamburger en js

// nettoyer ce code ci dessous !!! faire des functions
button.addEventListener("click", function () {
  if (button.getAttribute("aria-expanded") === "true") {
    // menu ouvert
    span1.style.transform = "rotate(0deg)";
    span2.style.visibility = "visible";
    span3.style.transform = "rotate(0deg)";
    menuDown.classList.remove("slide-in-menu");
    imagesMenu.setAttribute("hidden", true);
    menuDown.setAttribute("hidden", true);
    logoMenu.setAttribute("hidden", true);
  } else {
    span1.style.transform = "rotate(45deg)";
    span2.style.visibility = "hidden";
    span3.style.transform = "rotate(-45deg)";
    menuDown.classList.add("slide-in-menu");
    menuDown.removeAttribute("hidden");
    imagesMenu.removeAttribute("hidden");
    menuLi.forEach((element) => {
      element.addEventListener("click", (e) => {
        imagesMenu.setAttribute("hidden", true);
        menuDown.setAttribute("hidden", true);
        logoMenu.setAttribute("hidden", true);
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
//------------------------------------------SCROLL-----------------------------------------------

// window.addEventListener("scroll", () => {
//   //création d'un % au scroll
//   let scrollValueY =
//     (window.innerHeight + window.scrollY) / document.body.offsetHeight;

// // fonction de slide
// function slideInLeft() {
//   grosNuage.classList.add("slide-in-left");
//   petitNuage.classList.add("slide-in-left");
// }
// function removeSlideInleft() {
//   grosNuage.classList.remove("slide-in-left");
//   petitNuage.classList.remove("slide-in-left");

// }
//   if (scrollValueY > 2.5 && scrollValueY < 3.8 ) {
//     slideInLeft();
//   } else {
//     removeSlideInleft();
//   }
// });

window.addEventListener("scroll", () => {
  // Récupérer la valeur de défilement en pixels
  let scrollValue = window.scrollY;

  // Calculer la valeur de déplacement horizontal en fonction du défilement
  let translateValue = scrollValue * 0.7; // Ajustez ce facteur selon votre préférence

  // if (window.innerWidth === middleWidth) {
  //  if(window.innerwidth)
  // Appliquer la translation aux éléments d'image
  grosNuage.style.transform = `translateX(-${translateValue}px)`;
  petitNuage.style.transform = `translateX(-${translateValue}px)`;

  grosNuage.getBoundingClientRect();

  // let translateValueY = scrollValue * 0.05; // Ajustez le facteur multiplicatif selon votre préférence

  // p.forEach(element => {
  //   element.style.transform = `translateY(-${translateValueY}px)`;
  //   element.classList.add('translate-y');
  // });
});

//carroussel de personnages
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

// a faire
// ajouter les classes d'anim au images menu
//  verifier les ancres?
// faire le scroll rapide des fleurs?  pas possible de cibles pseudo elements
// refaire ce nuage orange si j'ai le temps
// nettoyer ce code

let before = document.querySelector("#story h2");

var style = window.getComputedStyle(before, "::after");

// let after = document.querySelector('#story h2', ':after');

console.log(style);
