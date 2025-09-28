import "/src/scss/style.scss";

window.addEventListener("load", () => {

  const burgerButton = document.querySelector(".burger-button");
  const header = document.querySelector(".header")
  
  burgerButton?.addEventListener("click", (e) => {
    header?.classList.toggle("_menu-open")
  })

});


