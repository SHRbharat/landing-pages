// console.log("script running");
const menuIcon = document.querySelector(".menu-icon");
const container = document.querySelector(".container");

function nav(){
    container.classList.toggle("change");
}

menuIcon.addEventListener("click",nav);