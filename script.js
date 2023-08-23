const enemies = document.getElementsByClassName("enemy1")
const gameCollection = document.getElementsByClassName("window")
const game = gameCollection[0]
// let enemiesWidth = enemies[0].clientWidth
console.log(enemies[0].style.top )
// console.log(enemies[0].style.left, enemiesWidth, winWidth)

enemies[0].style.width = 0.06 * window.innerWidth + "px"
enemies[0].style.height = 0.08* window.innerHeight + "px"
enemies[0].style.left = game.clientLeft*1.5 +10+ "px" // 10 is a padding size

console.log(enemies[0].style.top )
