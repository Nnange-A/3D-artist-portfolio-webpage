const hamburger = document.querySelector(".hamburger");
const topBun = document.querySelector("#top-bun");
const middleBun = document.querySelector("#middle-bun");
const bottomBun = document.querySelector("#bottom-bun");

const mobileNav = document.querySelector(".mobile-navbar");

let counter = 0;

hamburger.addEventListener("click", () => {
    
    topBun.classList.toggle("flip-down-bar");
    middleBun.classList.toggle("fade-out-bar");
    bottomBun.classList.toggle("flip-up-bar"); 
    
    mobileNav.classList.toggle("draw-mobile-nav")

    if (counter > 0) {
        topBun.classList.toggle("reverse-flip-down-bar");
        middleBun.classList.toggle("reverse-fade-out-bar");
        bottomBun.classList.toggle("reverse-flip-up-bar");
    }

    counter++;
})