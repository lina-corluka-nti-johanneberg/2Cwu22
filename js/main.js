document.querySelector(".fade-layer").addEventListener("click", showMenu);
document.querySelector(".menuicon").addEventListener("click", showMenu);
document.querySelector(".cross").addEventListener("click", showMenu);




function showMenu(){
    document.querySelector(".navmobile").classList.toggle("show")
    document.querySelector(".fade-layer").classList.toggle("visible")
}