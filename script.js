const   toggle = document.querySelector(".menu");


toggle.addEventListener("click", function () {


    const b = document.querySelector(".nav");
    b.style.display = "flex";
    const s = document.querySelector(".buttons");
    s.style.display = "flex";

             toggle.style.display = "none";

})