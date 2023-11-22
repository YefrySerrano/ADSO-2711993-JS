let singUp = document.getElementById("signUp")
let singin = document.getElementById("signIn")
let nameInput = document.getElementById("nameInput")
let title = document.getElementById("title")

singin.onclick = function(){
    nameInput.style.maxHeight="0"
    title.innerHtml="Login"
    singUp.classList.romove("disable")
    singin.classList.add("disable")
}
singUp.onclick = function (){
    nameInput.style.maxHeight="60px"
    title.innerHtml="Resgitro"
    singUp.classList.remove("disable")
    singIn.classList.add("disable")
}