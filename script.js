function shoot(e) {
    let laserId
    let currentLaserIndex = currentShooterIndex
    function moveLaser() {
        squares[currentLaserIndex].classList.remove('laser')
        currentLaserIndex -= width
        squares[currentLaserIndex].classList.add('laser')
    }
    switch(e.key) {
        case 'Space':
            laserId = setInterval (moveLaser, 100)
    }
}

document.addEventListener('keydown', shoot)