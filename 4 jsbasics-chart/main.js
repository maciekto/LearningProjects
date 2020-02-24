

const maciekChart = [
    {
        dayNumber: '1',
        free: false,
    },
    {
        dayNumber: '2',
        free: true,
    },
    {
        dayNumber: '3',
        free: true,
    },
    {
        dayNumber: '4',
        free: false,
    },
    {
        dayNumber: '5',
        free: false,
    },
    {
        dayNumber: '6',
        free: true,
    },
    {
        dayNumber: '7',
        free: false,
    },
    {
        dayNumber: '8',
        free: false,
    },
    {
        dayNumber: '9',
        free: false,
    },
    {
        dayNumber: '10',
        free: true,
    },
    {
        dayNumber: '11',
        free: true,
    },
    {
        dayNumber: '12',
        free: false,
    },
    {
        dayNumber: '13',
        free: true,
    },
    {
        dayNumber: '14',
        free: false,
    },
]
    const btn = document.querySelector('.submit');
    let text = document.querySelector('.text');
    console.log(text);
    btn.addEventListener('click', submit);
    function  submit(e) {
        e.preventDefault();
        /*if(text.value == 'true'){
            const textInput = document.querySelector('.gridCell11');
            textInput.style.background = 'green';
            
        }else{
            const textInput = document.querySelector('.gridCell11');
            textInput.style.background = 'red';
        }*/
        console.log(text);
    }

const czyDostepny = maciekChart.map((dni) => {
    return dni.free;
})
console.log(czyDostepny);
for(let i = 1; i<51; i++){
    if(i<32){
        const cell = document.querySelector(`.gridCell${i+9}`);
        cell.innerText = i;
        if(czyDostepny[i-1]==true){
            cell.style.background = 'green';
            
        }else if(czyDostepny[i-1]==false){
            cell.style.background = 'red';
        }else{
            cell.style.background = 'rgba(73, 75, 77, 0.253)';
        }
        
    }else if(i==32){
        for(let a = 1; a<20; a++){
            const cell1 = document.querySelector(`.gridCell${a+40}`);
            cell1.innerText = a;

        }    
    }else{
        
    }
}




