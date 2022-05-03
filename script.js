let aliensRemoved = []
const resultsDisplay = document.querySelector('.results')
let results = 0



draw()

if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
    resultsDisplay.innerHTML = 'GAME OVER'
    clearInterval(invadersId)
}

for (let i = 0; i < alienInvaders.length; i++) {
    if(alienInvaders[i] > (squares.length)) {
        resultsDisplay.innerHTML = 'GAME OVER'
        clearInterval(invadersId)
    }
}

if (aliensRemoved.length === alienInvaders.length) {
    resultsDisplay.innerHTML = "YOU WIN"
    clearInterval(invadersId)
}


function shoot(e) {
    let laserId
    let currentLaserIndex = currentShooterIndex
    function moveLaser() {
        squares[currentLaserIndex].classList.remove('laser')
        currentLaserIndex -= width
        squares[currentLaserIndex].classList.add('laser')

        if (squares[currentLaserIndex].classList.contains('invader')) {
            squares[currentLaserIndex].classList.remove('laser')
            squares[currentLaserIndex].classList.remove('invader')
            squares[currentLaserIndex].classList.add('boom')

            setTimeout(()=> squares[currentLaserIndex].classList.remove('boom'), 300)
            clearInterval(laserId)
            const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
            results++
            resultsDisplay.innerHTML = results
            aliensRemoved.push(alienRemoved)
        }
    }
    switch(e.key) {
        case 'Space':
            laserId = setInterval (moveLaser, 100)
    }
}

document.addEventListener('keydown', shoot)