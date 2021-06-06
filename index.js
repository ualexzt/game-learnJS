let $start = document.querySelector('#start')
let $game = document.querySelector('#game')
let score = 0;
$start.addEventListener('click', startGame)
$game.addEventListener('click', hendleBoxClick)
function startGame() {
  $start.classList.add('hide')
  $game.style.backgroundColor = '#fff'


  renderBox()
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
  box.style.backgroundColor = '#000'
  box.style.top = getRander(0, maxTop) + 'px'
  box.style.left = getRander(0, maxLeft) + 'px'
  box.style.cursor = 'pointer'
  box.setAttribute('data-box', 'true')

  $game.insertAdjacentElement("afterbegin", box)
}


function hendleBoxClick(event) {
  if (event.target.dataset.box) {
    renderBox()
    score++
  }
}

function getRander(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}