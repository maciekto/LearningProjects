const ButtonDown =  document.querySelector('.Button-Down');
const ButtonUp =  document.querySelector('.Button-Up');

ButtonDown.addEventListener('click', goDown);

function goDown(){
    const Photo1 = document.querySelector('.Photo-1');
    Photo1.classList.add('Photo-1_godown');
    setTimeout(() =>{
        Photo1.style.cssText = 'background: black';
    }, 500);
    setTimeout(() => {
        ButtonUp.addEventListener('click', goUp);
        Photo1.classList.remove('Photo-1_godown');
    },1000);

    ButtonDown.removeEventListener('click', goDown);
    
}
function goUp(){
    const Photo1 = document.querySelector('.Photo-1');
    Photo1.classList.add('Photo-1_goup');
    setTimeout(() =>{
        Photo1.style.cssText = 'background: white';
    }, 500);
    setTimeout(() => {
        Photo1.classList.remove('Photo-1_goup');
        ButtonDown.addEventListener('click', goDown);
    },1000);

    
    ButtonUp.removeEventListener('click', goUp);
}