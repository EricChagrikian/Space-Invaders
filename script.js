let aliensRemoved = []
const grid = document.querySelector('.grid')
let width = 20
let direction = 1
let invadersId 
let goinRight = true
let shooter = document.querySelector('.shooter')
const resultsDisplay = document.querySelector('.results')
let results = 0
let currentShooterIndex = 202


for (let i = 0; i < 800; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
}

const square= Array.from(document.querySelectorAll('.grid div'))

const alienInvaders = 
[0,1,2,3,4,5,6,7,8,9,10,
    20,21,22,23,24,25,26,27,28,29,30,
    40,41,42,43,44,45,46,47,48,49,50]

 function draw() {
     for (let i = 0; i < alienInvaders.length; i++) {
       if(!aliensRemoved.includes[i]) {
         square[alienInvaders[i]].classList.add('invader')
       }
     }
 }
 draw()

 function remove() {
    for (let i = 0; i < alienInvaders.length; i++) {
        square[alienInvaders[i]].classList.remove('invader')
    }
}


function moveinvaders() {
    const leftEdge = alienInvaders[0] % width === 0
    const rightEdge = alienInvaders[alienInvaders.length -1] % width === width -1
    remove()

    if  (rightEdge && goinRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width +1
            direction = -1
            goinRight = false
        }
    }

    if (leftEdge && !goinRight) {
        for (let i = 0; i < alienInvaders.length; i++){
            alienInvaders[i] += width +5
            direction = 1
            goinRight = true
        }
    }

    for(let i = 0; i< alienInvaders.length; i++) {
        alienInvaders[i] += direction
    }
  
    draw()
  
    if (shooter[currentShooterIndex].classList.contains('invader', 'shooter')) {
      resultsDisplay.innerHTML = 'GAME OVER'    
      clearInterval(invadersId)
    }

    for (let i = 0; i < alienInvaders.length; i++) {
        if(alienInvaders[i] > (shooter.length)) {
            resultsDisplay.innerHTML = 'GAME OVER'
            clearInterval(invadersId)
        }
    }

    if (aliensRemoved.length === alienInvaders.length) {
        resultsDisplay.innerHTML = "YOU WIN"
        clearInterval(invadersId)
    }
}

invadersId =setInterval(moveinvaders, 100)

window.addEventListener('load', () =>{
shooter.style.position = 'absolute';
shooter.style.left = 50+"%";
shooter.style.bottom = 15+"px";
});

document.addEventListener('keydown', (e)=>{
if(shooter.style.left===-8+"%"){
    console.log("limite");
}
else{
    if(e.key === "ArrowLeft"){
        shooter.style.left=parseInt(shooter.style.left) -2 +"%"
        
    }
}
if(shooter.style.left===90+"%"){
    console.log("limite");
}
else{
    if(e.key==='ArrowRight'){
        shooter.style.left=parseInt(shooter.style.left) +2 +"%"
    }
    
}
}
)

function shoot(e) {
    let laserId
    let currentLaserIndex = currentShooterIndex
    function moveLaser() {
        shooter[currentLaserIndex].classList.remove('laser')
        currentLaserIndex -= width
        shooter[currentLaserIndex].classList.add('laser')

        if (shooter[currentLaserIndex].classList.contains('invader')) {
            shooter[currentLaserIndex].classList.remove('laser')
            shooter[currentLaserIndex].classList.remove('invader')
            shooter[currentLaserIndex].classList.add('boom')

            setTimeout(()=> shooter[currentLaserIndex].classList.remove('boom'), 300)
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
