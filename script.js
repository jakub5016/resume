const enemies = document.getElementsByClassName("enemy1")
const game = document.querySelector(".window");

// let enemiesWidth = enemies[0].clientWidth
// console.log(enemies[0].style.left, enemiesWidth, winWidth)

enemies[0].style.width = 0.06 * window.innerWidth + "px"
enemies[0].style.height = 0.08* window.innerHeight + "px"
enemies[0].style.left = game.clientLeft*1.5 +10+ "px" // 10 is a padding size

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