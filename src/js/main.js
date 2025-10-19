import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "/src/scss/style.scss";


window.addEventListener("load", () => {

  const burgerButton = document.querySelector(".burger-button");
  const header = document.querySelector(".header");
  const headerMenu = document.querySelector(".header__menu");
  const showMoreProductsButton = document.querySelector(".products .button");
  const productsContainer = document.querySelector(".products__collection");
  const productCards = document.querySelectorAll(".product-card");
  const contactForm = document.querySelector(".contact-form");
  
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

  
  const productCardsSortedByHeightDesc = [...productCards].sort((a, b) => b.clientHeight -a.clientHeight);
  const maxCardHeight = productCardsSortedByHeightDesc[0].clientHeight+10;
  productsContainer.style.maxHeight = `${maxCardHeight/16}rem`;

  showMoreProductsButton?.addEventListener("click", (e) => {
    const targetButton = e.target;
    if (!targetButton.classList.contains("_show-more")) {
      targetButton.classList.add("_show-more");
      const containerScrollHeight = productsContainer?.scrollHeight;
      productsContainer.style.maxHeight = `${containerScrollHeight / 16}rem`;
      targetButton.textContent = "Show less Items";
    } else {
      targetButton.classList.remove("_show-more");
      productsContainer.style.maxHeight = `${maxCardHeight / 16}rem`;
      targetButton.textContent = "Explore All Items";
    }
   
  });

  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    e.currentTarget.reset()
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


