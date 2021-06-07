let $start = document.querySelector('#start')
let $game = document.querySelector('#game')
let $time = document.querySelector('#time')
let $result = document.querySelector('#result')
let $gameTime = document.querySelector('#game-time')
let score = 0;
let isGameStarted = false
let $timeHeader = document.querySelector('#time-header')
let $resultHeader = document.querySelector('#result-header')
let colors = ['#4158D0', '#C850C0', '#FFCC70', '#8EC5FC', '#E0C3FC', '#6284FF', '#FF0000',
  '#00DBDE', '#FBAB7E', '#85FFBD', '#8BC6EC', '#9599E2', '#FFDEE9', '#2AF598']

$start.addEventListener('click', startGame)
$game.addEventListener('click', hendleBoxClick)
$gameTime.addEventListener('input', setTimeGame)

function show($el) {
  $el.classList.remove('hide')
}

function hide($el) {
  $el.classList.add('hide')
}


function startGame() {
  score = 0
  setTimeGame()
  $gameTime.setAttribute('disabled', 'true')

  hide($start)
  $game.style.backgroundColor = '#fff'
  isGameStarted = true
  let interval = setInterval(() => {
    let time = parseFloat($time.textContent)
    if (time <= 0) {
      clearInterval(interval)
      endGame()
    } else {
      $time.textContent = (time - 0.1).toFixed(1)
    }
  }, 100)

  renderBox()
}

function setGameScore() {
  $result.textContent = score.toString()
}

function setTimeGame() {
  let time = +$gameTime.value
  $time.textContent = time.toFixed(1)
  show($timeHeader)
  hide($resultHeader)
}

function renderBox() {
  $game.innerHTML = ''
  let boxSize = getRander(30, 100)
  let box = document.createElement('div')
  let gameSize = $game.getBoundingClientRect()
  let maxTop = gameSize.height - boxSize
  let maxLeft = gameSize.width - boxSize
  box.style.height = box.style.width = boxSize + 'px'
  box.style.position = 'absolute'
  box.style.backgroundColor = colors[getRander(0, colors.length)]
  box.style.top = getRander(0, maxTop) + 'px'
  box.style.left = getRander(0, maxLeft) + 'px'
  box.style.cursor = 'pointer'
  box.setAttribute('data-box', 'true')

  $game.insertAdjacentElement("afterbegin", box)
}


function hendleBoxClick(event) {
  if (event.target.dataset.box) {
    if (!isGameStarted) {
      return
    }
    renderBox()
    score++
  }
}

function getRander(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function endGame() {
  isGameStarted = false
  show($start)
  $game.innerHTML = ''
  $game.style.backgroundColor = '#ccc'
  hide($timeHeader)
  show($resultHeader)
  setGameScore()
  $gameTime.removeAttribute('disabled')
}