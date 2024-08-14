const buttonMenu = document.getElementById("menu")
 buttonMenu.addEventListener("click", function() {
    const menuHamburguer = document.querySelector(".menuHamburguer")
    menuHamburguer.classList.toggle("open")
 })


 const buttonCloseMenu = document.getElementById("buttonCloseMenu").addEventListener("click", function() {
    const menuHamburguer = document.querySelector(".menuHamburguer")
    menuHamburguer.classList.remove("open")
 })