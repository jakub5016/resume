const character = document.querySelector(".character");
character.animationStartTime = null;
character.animationDuration = 200;
character.step = window.innerWidth * 0.1;
character.isMoving = false;

let characterX = 0;
let targetCharacterX = 0; 

function moveCharacter(direction) {
  if (character.isMoving) return;
  character.isMoving = true;

  let newCharacterX = characterX;

  switch (direction) {
    case 'left':
      newCharacterX -= character.step;
      break;
    case 'right':
      newCharacterX += character.step;
      break;
  }

  // Sprawdź, czy nowe położenie mieści się na planszy
  if (newCharacterX >= 0 && newCharacterX <= window.innerWidth*0.6) {
    targetCharacterX = newCharacterX;
    character.animationStartTime = null; // Zresetuj czas rozpoczęcia animacji
    requestAnimationFrame(animateCharacter);
  }
  else{
    character.isMoving = false;
  }
}

function animateCharacter(timestamp) {
  if (!character.animationStartTime) character.animationStartTime = timestamp;
  const elapsedTime = timestamp - character.animationStartTime;
  const progress = Math.min(elapsedTime / character.animationDuration, 1); // Postęp animacji od 0 do 1

  const currentPosition = characterX + (targetCharacterX - characterX) * progress;
  character.style.left = currentPosition + 'px';

  if (progress < 1) {
    requestAnimationFrame(animateCharacter);
  } else {
    characterX = targetCharacterX;
    followCharacter()
    character.isMoving = false;
  }
}

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      moveCharacter('left');
      break;
    case 'ArrowRight':
      moveCharacter('right');
      break;
    case 'ArrowUp':
      shot();
      break;
  }
});
