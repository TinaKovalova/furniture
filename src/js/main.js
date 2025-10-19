import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "/src/scss/style.scss";


window.addEventListener("load", () => {

  const burgerButton = document.querySelector(".burger-button");
  const header = document.querySelector(".header");
  const headerMenu = document.querySelector(".header__menu");
  
  burgerButton?.addEventListener("click", (e) => {
    header?.classList.toggle("_menu-open")
  })
  headerMenu?.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && header?.classList.contains("_menu-open")) {
     header.classList.remove("_menu-open");
    }
  })

  let lastScroll = 0;
  const isContainClassHide = () => header.classList.contains("hide");
  window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY || document.documentElement.scrollTop;
  if (scrollPosition > lastScroll && scrollPosition > header.offsetHeight && !isContainClassHide()) {
    header.classList.add("hide");
  } else if (scrollPosition < lastScroll && isContainClassHide()) {
    header.classList.remove("hide");
  }
  lastScroll = scrollPosition;
});


  const swiper = new Swiper(".reviews__slider.swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 15,
    modules: [Navigation],
    navigation: {
      nextEl: ".reviews__slider-button.reviews__slider-button--next",
      prevEl: ".reviews__slider-button.reviews__slider-button--prev",
    },
    breakpoints: {
      992: {
        spaceBetween: 57,
      },
    },
  });



});


