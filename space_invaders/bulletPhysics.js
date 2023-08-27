const bullet = document.querySelector(".bullet")
bullet.animationStartTime = null;
bullet.animationDuration = 200;
bullet.step = window.innerHeight * 0.1;
bullet.isMoving = false;


let bulletY = 0;
let targetBulletY = 0; 
// Setup
bullet.style.left = character.style.left


// Listener

function followCharacter() {
    bullet.style.left = character.style.left
}

  

function shot (){
    bullet.isMoving = true
    targetBulletY = bulletY - bullet.step
    bullet.animationStartTime = null; // Zresetuj czas rozpoczęcia animacji
    requestAnimationFrame(animateShot)
    bullet.isMoving = false;

}

function animateShot(timestamp){
    console.log("A")

    if (!bullet.animationStartTime) bullet.animationStartTime = timestamp;
    const elapsedTime = timestamp - bullet.animationStartTime;
    const progress = Math.min(elapsedTime / bullet.animationDuration, 1); // Postęp animacji od 0 do 1
  
    const currentPosition = bulletY + (targetBulletY - bulletY) * progress;
    bullet.style.top = currentPosition + 'px';
  
    if (progress < 1) {
      requestAnimationFrame(animateShot);
    } else {
      bulletY = targetBulletY;
      bullet.isMoving = false;
    }
}