import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "/src/scss/style.scss";


window.addEventListener("load", () => {

  const burgerButton = document.querySelector(".burger-button");
  const header = document.querySelector(".header")
  
  burgerButton?.addEventListener("click", (e) => {
    header?.classList.toggle("_menu-open")
  })

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


