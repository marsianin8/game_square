const board = document.querySelector('#board')
const SQUARES_NUMBER = 720
const colors = ['#123456', '#759463', '#326457', '#567983', '#672957', '#692050']





for (  let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
    setColor(square)
    )

    square.addEventListener('mouseleave', () => 
    removeColor(square)
    )

    board.append(square)
}






function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}