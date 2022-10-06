var width = window.innerWidth
var logo = document.getElementById("logo")
var section = document.getElementById("section")
var burgOpen = document.getElementById("burguerOpen")
var burgClose = document.getElementById("burguerClose")
var body = document.getElementsByTagName("body")
var section2 = document.getElementById("section2")



if(width <= 500){
   
    logo.setAttribute("src","./assets/logo-mobile.svg")

}
function  burguerOpen(){
    section.style.display = "none"
    burgOpen.style.display = "none"
    burgClose.style.display = "block"
    document.body.style.backgroundImage ="none"
    section2.style.display = "block"

}
function  burguerClose(){
    section.style.display = "block"
    burgOpen.style.display = "block"
    burgClose.style.display = "none"
    document.body.style.backgroundImage = 'url("./assets/blur-mobile.png")'
    section2.style
    
    
}


