const hello = document.querySelector('.hello');


const btn = document.querySelector('.btn');
btn.addEventListener('click', zmien);

function zmien(){
    hello.style.color = 'red';
}
