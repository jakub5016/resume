const bullet = document.querySelector(".bullet")


// Setup
bullet.style.left = character.style.left


// Listener

function followCharacter() {
    bullet.style.left = character.style.left
}

  

function shot (){
    bullet.style.top = "100px"
}