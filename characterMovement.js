const character = document.querySelector(".character")
let isMoving = false; // Dodatkowa zmienna do śledzenia, czy gracz jest w trakcie ruchu


let characterX = 0;
const step = 20;

function moveCharacter(direction) {
  if (isMoving) return; // Sprawdź, czy gracz nie jest już w trakcie ruchu
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
    character.style.left = newCharacterX + 'px';
    characterX = newCharacterX;
  }

  setTimeout(() => {
    isMoving = false; // Ustaw isMoving na false po zakończeniu ruchu i animacji
  }, 200); // Czas trwania animacji w milisekundach
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