const character = document.querySelector(".character");
let isMoving = false;
let characterX = 0;
let targetCharacterX = 0; // Nowa zmienna przechowująca docelowe położenie postaci
const step = window.innerWidth * 0.1;
const animationDuration = 200; // Czas trwania animacji w milisekundach
let animationStartTime = null;

function moveCharacter(direction) {
  if (isMoving) return;
  isMoving = true;

  let newCharacterX = characterX;

  switch (direction) {
    case 'left':
      newCharacterX -= step;
      break;
    case 'right':
      newCharacterX += step;
      break;
  }

  // Sprawdź, czy nowe położenie mieści się na planszy
  if (newCharacterX >= 0 && newCharacterX <= window.innerWidth - 40) {
    targetCharacterX = newCharacterX;
    animationStartTime = null; // Zresetuj czas rozpoczęcia animacji
    requestAnimationFrame(animateCharacter);
  }
}

function animateCharacter(timestamp) {
  if (!animationStartTime) animationStartTime = timestamp;
  const elapsedTime = timestamp - animationStartTime;
  const progress = Math.min(elapsedTime / animationDuration, 1); // Postęp animacji od 0 do 1

  const currentPosition = characterX + (targetCharacterX - characterX) * progress;
  character.style.left = currentPosition + 'px';

  if (progress < 1) {
    requestAnimationFrame(animateCharacter);
  } else {
    characterX = targetCharacterX;
    followCharacter()
    isMoving = false;
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
  }
});
