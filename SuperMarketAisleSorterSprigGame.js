/*
@title: Super Market Aisle Sorter
@author: pkd2210, peleg2210, Peleg 
@tags: []
@addedOn: 2025-07-01
*/

const Apple = "a"
const Banana = "b"
const Tomatoe = "t"
const Carrot = "c"
const Milk = "m"
const Cheese = "h"
const Yougurt = "y"
const Butter = "u"
const WhiteBread = "w"
const Baguette = "g"
const Croissants = "r"
const Bagel = "l"
const ChickenBreast = "k"
const Beef = "e"
const Sausage = "s"
const Salmon = "n"
const Spagehetti = "i"
const Rice = "z"
const Flour = "f"
const Sugar = "x"
const OliveOil = "o"
const Salt = "j"
const Pepper = "q"
const Paprika = "v"
const Wall = "W"

setLegend(
  [ Apple, bitmap`
................
................
................
.......66.......
......6DD6......
.....6DDD6......
....4444444.....
...444444444....
...444444444....
..44444444444...
..44444444444...
..44444444444...
...444444444....
....4444444.....
.....44444......
................` ],
[ Banana, bitmap`
................
................
................
......6666......
.....6666.......
....6666........
...6666.........
..6666..........
..666...........
..666...........
..666...........
..666...........
..6666..........
...6666.........
....666.........
................` ],
[ Tomatoe, bitmap`
................
................
.......DD.......
......DDDD......
.....DDDDDD.....
....33333333....
...3333333333...
..333333333333..
..333333333333..
..333333333333..
..333333333333..
...3333333333...
....33333333....
.....333333.....
......3333......
................` ],
[ Carrot, bitmap`
................
................
...DD...DD......
..DDDD.DDDD.....
..DDDDDDDD......
...DDDDDD.......
....9999........
....9999........
....9999........
....9999........
....9999........
....9999........
....9999........
...99999........
..999999........
................` ],
[ Milk, bitmap`
................
................
....00000000....
....02222220....
....02222220....
....02222220....
....02222220....
....02222220....
....02222220....
....02222220....
....02222220....
....02222220....
....02222220....
....02222220....
....00000000....
................` ],
[ Cheese, bitmap`
................
................
....6666666.....
...666666666....
..66666666666...
..66666666666...
..66606660660...
..66666666666...
..66606660660...
..66666666666...
..66606660660...
..66666666666...
...666666666....
....6666666.....
................
................` ],
[ Yougurt, bitmap`
................
................
....00000000....
...027777770....
..027777777770..
..027777777770..
..027777777770..
..027777777770..
..027777777770..
..027777777770..
..027777777770..
..027777777770..
..027777777770..
...027777770....
....00000000....
................` ],
[ Butter, bitmap`
................
................
................
...0000000000...
..020666666620..
..026666666660..
..026666666660..
..026666666660..
..026666666660..
..026666666660..
..026666666660..
..026666666660..
...0206666620...
....00000000....
................
................` ],
[ WhiteBread, bitmap`
................
................
................
...000000000000.
..02LLLLLLLL20..
.02LLLLLLLLLL20.
02LLLLLLLLLLLL20
02LLLLLLLLLLLL20
02LLLLLLLLLLLL20
02LLLLLLLLLLLL20
02LLLLLLLLLLLL20
.02LLLLLLLLLL20.
..02LLLLLLLL20..
...000000000000.
................
................` ],
[ Baguette, bitmap`
................
................
................
................
....CCCCCCCCC...
...CCCCCCCCCCC..
..CCCCCCCCCCCCC.
.CCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
.CCCCCCCCCCCCCCC
..CCCCCCCCCCCCC.
...CCCCCCCCCCC..
....CCCCCCCCC...
................
................` ],
[ Croissants, bitmap`
................
................
................
................
..6666..........
.666666.........
.666666666......
.66666666666....
..666666666666..
...6666666666...
....66666666....
.....666666.....
......6666......
.......66.......
................
................` ],
[ Bagel, bitmap`
................
................
................
................
....00000000....
...02CCCCCC20...
..02CCCCCCCC20..
..02CC0000CC20..
..02C026602C20..
..02C026602C20..
..02CC0000CC20..
..02CCCCCCCC20..
...02CCCCCC20...
....00000000....
................
................` ],
[ ChickenBreast, bitmap`
................
................
................
....LLLLLL......
...LLLLLLLL.....
..LLLLLLLLLL....
..LLLLLLLLLL....
..LLLLLLLLLL....
..LLLLLLLLLL....
..LLLLLLLLLL....
..LLLLLLLLLL....
...LLLLLLLL.....
....LLLLLL......
.....LLLL.......
................
................` ],
[ Beef, bitmap`
................
................
................
....33333333....
...3333333333...
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..333333333333..
...3333333333...
....33333333....
.....333333.....
................
................` ],
[ Sausage, bitmap`
................
................
................
................
....33333333....
...3333333333...
..33333333333...
..33333333333...
..33333333333...
..33333333333...
..33333333333...
...3333333333...
....33333333....
................
................
................` ],
[ Salmon, bitmap`
................
................
................
....7777777.....
...777777777....
..77777777777...
..77777777777...
..77777777777...
..77777777777...
..77777777777...
..77777777777...
...777777777....
....7777777.....
.....77777......
................
................` ],
[ Spagehetti, bitmap`
................
................
................
...6666666666...
...6666666666...
...6666666666...
...6666666666...
...6666666666...
...6666666666...
...6666666666...
...6666666666...
...6666666666...
...6666666666...
................
................
................` ],
[ Rice, bitmap`
................
................
................
....22222222....
...2222222222...
..222222222222..
..222222222222..
..222222222222..
..222222222222..
..222222222222..
..222222222222..
...2222222222...
....22222222....
................
................
................` ],
[ Flour, bitmap`
................
................
................
....00000000....
...02LLLLLL20...
..02LLLLLLLL20..
..02LLLLLLLL20..
..02LLLLLLLL20..
..02LLLLLLLL20..
..02LLLLLLLL20..
..02LLLLLLLL20..
...02LLLLLL20...
....00000000....
................
................
................` ],
[ Sugar, bitmap`
................
................
................
....00000000....
...0222222220...
..022222222220..
..022222222220..
..022222222220..
..022222222220..
..022222222220..
..022222222220..
...0222222220...
....00000000....
................
................
................` ],
[ OliveOil, bitmap`
................
................
................
.......0........
......000.......
.....00000......
....0000000.....
....0000000.....
....0000000.....
....0000000.....
....0000000.....
....0000000.....
....0000000.....
....0000000.....
................
................` ],
[ Salt, bitmap`
................
................
................
.......00.......
......0LL0......
.....0LLLL0.....
....0LLLLLL0....
....0LLLLLL0....
....0LLLLLL0....
....0LLLLLL0....
....0LLLLLL0....
....0LLLLLL0....
....0LLLLLL0....
....0LLLLLL0....
................
................` ],
[ Pepper, bitmap`
................
................
................
.......11.......
......1111......
.....111111.....
....11111111....
....11111111....
....11111111....
....11111111....
....11111111....
....11111111....
....11111111....
....11111111....
................
................` ],
[ Paprika, bitmap`
................
................
................
.......33.......
......3333......
.....333333.....
....33333333....
....33333333....
....33333333....
....33333333....
....33333333....
....33333333....
....33333333....
....33333333....
................
................` ],
  [ Wall, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000` ],
)
let currentScore = 0
let bestScore = 0
let gameRunning = false
let gameOver = false
let currentItem = null

// Item categories
const categories = {
  "Fruits & Vegetables": [Apple, Banana, Tomatoe, Carrot],
  "Dairy & Eggs": [Milk, Cheese, Yougurt, Butter],
  "Bakery": [WhiteBread, Baguette, Croissants, Bagel],
  "Meat & Fish": [ChickenBreast, Beef, Sausage, Salmon],
  "Pasta & Dry": [Spagehetti, Rice, Flour, Sugar],
  "Spices & Oils": [OliveOil, Salt, Pepper, Paprika]
}

const categoryNames = Object.keys(categories)
const allItems = Object.values(categories).flat()
const itemNames = {
  [Apple]: "Apple", [Banana]: "Banana", [Tomatoe]: "Tomato", [Carrot]: "Carrot",
  [Milk]: "Milk", [Cheese]: "Cheese", [Yougurt]: "Yogurt", [Butter]: "Butter",
  [WhiteBread]: "White Bread", [Baguette]: "Baguette", [Croissants]: "Croissants", [Bagel]: "Bagel",
  [ChickenBreast]: "Chicken Breast", [Beef]: "Beef", [Sausage]: "Sausage", [Salmon]: "Salmon",
  [Spagehetti]: "Spaghetti", [Rice]: "Rice", [Flour]: "Flour", [Sugar]: "Sugar",
  [OliveOil]: "Olive Oil", [Salt]: "Salt", [Pepper]: "Pepper", [Paprika]: "Paprika"
}

const gameMap = map`
WWWWWWWWWWWWWWWWWWWW
W..................W
W..................W
W..................W
W..................W
W..................W
W..................W
W..................W
W..................W
W..................W
W..................W
W..................W
W..................W
W..................W
W..................W
WWWWWWWWWWWWWWWWWWWW`

setMap(gameMap)

setSolids([Wall])

function getRandomItem() {
  return allItems[Math.floor(Math.random() * allItems.length)]
}

function getCategoryForItem(item) {
  for (const [categoryName, items] of Object.entries(categories)) {
    if (items.includes(item)) {
      return categoryName
    }
  }
  return null
}

function startNewRound() {
  if (gameOver) return
  currentItem = getRandomItem()
  gameRunning = true
  clearTile(9, 3)
  addSprite(9, 3, currentItem)
  updateDisplay()
}

function endGame() {
  gameRunning = false
  gameOver = true
  if (currentScore > bestScore) {
    bestScore = currentScore
  }
  clearText()
  
  const gameOverText = "GAME OVER!"
  const gameOverCenterX = Math.floor((20 - gameOverText.length) / 2)
  addText(gameOverText, { x: gameOverCenterX, y: 6, color: color`3` })
  
  const scoreText = "Score: " + currentScore
  const scoreCenterX = Math.max(1, Math.floor((20 - scoreText.length) / 2))
  addText(scoreText, { x: scoreCenterX, y: 7, color: color`0` })
  
  const bestText = "Best: " + bestScore
  const bestCenterX = Math.max(1, Math.floor((20 - bestText.length) / 2))
  addText(bestText, { x: bestCenterX, y: 8, color: color`4` })
  
  const restartText = "Press L to restart"
  const restartCenterX = Math.floor((20 - restartText.length) / 2)
  addText(restartText, { x: restartCenterX, y: 10, color: color`0` })
  
  addText("(R>)", { x: 7, y: 11, color: color`2` })
}

function updateDisplay() {
  clearText()
  if (gameOver) return
  if (gameRunning && currentItem) {
    const itemName = itemNames[currentItem]
    const centerX = Math.floor((20 - itemName.length) / 2)
    addText(itemName, { x: centerX, y: 1, color: color`0` })
    
    const scoreText = "Score: " + currentScore
    const scoreX = Math.max(1, Math.floor((20 - scoreText.length) / 2))
    addText(scoreText, { x: scoreX, y: 2, color: color`4` })
    
    const categoriesText = "Categories:"
    const categoriesCenterX = Math.floor((20 - categoriesText.length) / 2)
    addText(categoriesText, { x: categoriesCenterX, y: 8, color: color`0` })
    
    addText("L^ W: Fruit&Veg", { x: 1, y: 9, color: color`D` })
    addText("L< A: Dairy", { x: 1, y: 10, color: color`7` })
    addText("L> D: Bakery", { x: 1, y: 11, color: color`C` })
    addText("R^  I: Meat", { x: 1, y: 12, color: color`3` })
    addText("R<  J: Pasta", { x: 1, y: 13, color: color`6` })
    addText("Rv  K: Spices", { x: 1, y: 14, color: color`9` })
  } else {
    const titleText = "Market Sorter"
    const titleCenterX = Math.floor((20 - titleText.length) / 2)
    addText(titleText, { x: titleCenterX, y: 4, color: color`4` })
    
    const bestText = "Best Score: " + bestScore
    const bestCenterX = Math.max(1, Math.floor((20 - bestText.length) / 2))
    addText(bestText, { x: bestCenterX, y: 6, color: color`0` })
    
    const startText = "Press S to start"
    const startCenterX = Math.floor((20 - startText.length) / 2)
    addText(startText, { x: startCenterX, y: 8, color: color`0` })
    
    addText("Use D-pads", { x: 6, y: 10, color: color`0` })
    addText("L=Left", { x: 7, y: 11, color: color`0` })
    addText("R=Right", { x: 7, y: 12, color: color`0` })
  }
}

function restartGame() {
  currentScore = 0
  gameRunning = false
  gameOver = false
  currentItem = null
  setMap(gameMap)
  updateDisplay()
}

function checkAnswer(categoryIndex) {
  if (!gameRunning || !currentItem) return
  const selectedCategory = categoryNames[categoryIndex - 1]
  const correctCategory = getCategoryForItem(currentItem)
  if (selectedCategory === correctCategory) {
    currentScore += 1
    clearTile(9, 3)
    startNewRound()
  } else {
    endGame()
  }
}

updateDisplay()

onInput("s", () => {
  if (!gameRunning && !gameOver) {
    startNewRound()
  }
})

onInput("w", () => { 
  checkAnswer(1) 
})
onInput("a", () => { 
  checkAnswer(2) 
})
onInput("d", () => { 
  checkAnswer(3) 
})
onInput("i", () => { 
  checkAnswer(4) 
})
onInput("j", () => { 
  checkAnswer(5) 
})
onInput("k", () => { 
  checkAnswer(6) 
})

onInput("l", () => {
  if (gameOver) {
    restartGame()
  }
})