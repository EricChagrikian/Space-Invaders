
let shooter = document.querySelector('.shooter')
let grid = document.querySelector('.grid')



window.addEventListener('load', () =>{
shooter.style.position = 'absolute';
shooter.style.left = 50+"%";
shooter.style.bottom = 15+"px";
});

document.addEventListener('keydown', (e)=>{
if(shooter.style.left===0+"%"){
    console.log("limite");
}
else{
    if(e.key === "ArrowLeft"){
        shooter.style.left=parseInt(shooter.style.left) -2 +"%"
        
    }
}
if(shooter.style.left===0+"%"){
    console.log("limite");
}
else{
    if(e.key==='ArrowRight'){
        shooter.style.left=parseInt(shooter.style.left) +2 +"%"
    }
    
}
}
)