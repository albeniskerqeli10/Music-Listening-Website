const   toggle = document.querySelector(".menu");



toggle.addEventListener("click", function (toggler) {
  let togglenav = document.querySelector(".nav");

  if (togglenav.style.display === "flex" ) {
    togglenav.style.display = "none";

  } else {
    togglenav.style.display = "flex";

  }
   


})