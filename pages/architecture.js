const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
const navItems = document.querySelectorAll(".navigation a");

menuIcon.addEventListener("click",() => {
    navbar.classList.toggle("change");
})

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navbar.classList.toggle("change");
    });
});


function searchBar(){
    if(window.innerWidth <= 500){
        const searchIcon = document.querySelector(".search-bar i");
        const cancelIcon = document.querySelector(".hamburger-menu i");
    
        searchIcon.addEventListener('click',()=>{
            navbar.classList.toggle("searching");
        })
        cancelIcon.addEventListener('click',()=>{
            navbar.classList.toggle("searching");
        })
    }
}
window.addEventListener("resize",searchBar);
