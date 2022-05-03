const grid = document.querySelector('.grid')
let width = 20
let direction = 1
let invadersId 
let goinRight = true

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

         square[alienInvaders[i]].classList.add('invader')
        
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
            alienInvaders[i] += width -1
            direction = 1
            goinRight = true
        }
    }

    for(let i = 0; i< alienInvaders.length; i++) {
        alienInvaders[i] += direction
    }

    draw()

    
}

invadersId =setInterval(moveinvaders, 500)
 

