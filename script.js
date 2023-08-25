const enemies = document.getElementsByClassName("enemy1")
const game = document.querySelector(".window");
const player = document.querySelector("character")

function setUpEnemies(){
    const enemyTop = enemies[0].clientTop; // Pobierz początkową wartość top
    const enemyWidth = 0.06 * window.innerWidth + "px"
    const enemyHeight = 0.08* window.innerHeight + "px"

    for (let index = 0; index < enemies.length; index++) {
        enemies[index].style.width = enemyWidth
        enemies[index].style.height = enemyHeight
        enemies[index].style.left = game.clientLeft*1.5 +(enemies[0].clientWidth * 2* index)+ "px"
        enemies[index].style.top = enemyTop -  (enemies[index].clientHeight * index) + "px"
        enemies[index].style.animation = "moveAnimation 5s infinite"
    }
}

setUpEnemies();

window.addEventListener('resize', setUpEnemies);

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        player.style.animation = "moveAnimation 1s"
    }
  });
