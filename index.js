let $start = document.querySelector('#start')
let $game = document.querySelector('#game')

$start.addEventListener('click', startGame)
$game.addEventListener('click', hendleBoxClick)
function startGame() {
  $start.classList.add('hide')
  $game.style.backgroundColor = '#fff'


  renderBox()
}


function renderBox() {
  let box = document.createElement('div')
  box.style.height = box.style.width = '50px'
  box.style.position = 'absolute'
  box.style.backgroundColor = '#000'
  box.style.top = '50px'
  box.style.left = '50px'
  box.style.cursor = 'pointer'
  box.setAttribute('data-box', 'true')

  $game.insertAdjacentElement("afterbegin", box)
}


function hendleBoxClick(event) {
  console.log(event.target.dataset);
}