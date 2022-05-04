

const grid = document.querySelector('.grid')
let width = 20
let direction = 1
let currentShooterIndex = 403
let invadersId 
let goinRight = true
let shooter = document.querySelector('.shooter')
const resultsDisplay = document.querySelector('.results')
let results = 0
let aliensRemoved = []
let button = document.querySelector('.button')


for (let i = 0; i < 800; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

window.addEventListener('load', () =>{
    shooter.style.position = 'absolute';
    shooter.style.left = 50+"%";
    shooter.style.bottom = 10+"px";
    });
    function move (e){
        
    if(shooter.style.left===0+"%"){
        console.log("limite");
    }
    else{
        if(e.key === "ArrowLeft"){
            shooter.style.left=parseInt(shooter.style.left) -10 +"%"
            
        }   
    }
    if(shooter.style.left===100+"%"){
        console.log("limite");
    }
    else{
        if(e.key==='ArrowRight'){
            shooter.style.left=parseInt(shooter.style.left) +10 +"%"
        }
        
    }
    
  
    }
    
    
    
    document.addEventListener('keydown',move)

const alienInvaders = 
    [0,1,2,3,4,5,6,7,8,9,10,
    20,21,22,23,24,25,26,27,28,29,30,
    40,41,42,43,44,45,46,47,48,49,50]

 function draw() {
     for (let i = 0; i < alienInvaders.length; i++) {
       if(!aliensRemoved.includes(i)) {
         squares[alienInvaders[i]].classList.add('invader')
       }
     }
 }
 draw()

 function remove() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.remove('invader')
    }
}




function moveinvaders() {
    const leftEdge = alienInvaders[0] % width === 3
    const rightEdge = alienInvaders[alienInvaders.length -1] % width === 2
    remove()

    if  (rightEdge && goinRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width
            direction = -1
            goinRight = false
        }
    }

    if (leftEdge && !goinRight) {
        for (let i = 0; i < alienInvaders.length; i++){
            alienInvaders[i] += width +1
            direction = 1
            goinRight = true
        }
    }

    for(let i = 0; i< alienInvaders.length; i++) {
        alienInvaders[i] += direction
    }
  
    draw()

    if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
      resultsDisplay.innerHTML = 'GAME OVER'
      button.style.display="inline-block"
      button.innerHTML="try again"
      clearInterval(invadersId)
    }
    button.addEventListener('click',()=>{
        window.location.reload(true)
    })
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
}
function starter(){
    invadersId =setInterval(moveinvaders, 100)
}


let start = document.querySelector('.start')
start.innerHTML='start'
start.addEventListener('click',()=>{
start.classList.remove('start')
    starter()

})



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
            aliensRemoved.push(alienRemoved)
            results++
            resultsDisplay.innerHTML = results
            console.log(aliensRemoved)
        }
    }
    switch(e.key) {
        case 'Space':
            laserId = setInterval (moveLaser, 100)
    }
}

document.addEventListener('keydown', shoot)

