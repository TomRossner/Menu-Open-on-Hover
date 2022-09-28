const menu = document.querySelector(".menu-container");
const links = document.querySelector(".links");



menu.addEventListener("mouseover", () => {
    menu.classList.add("expand");
})

menu.addEventListener("mouseout", () =>{
    menu.classList.remove("expand");
})