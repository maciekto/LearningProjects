//console.log('hello console');
/*const array = ['jeden','dwa','trzy','cztery'];

const object ={  
    description: 'This is an object with array inside and second object',
    object_id: 1,
    name: 'Dominique',
    identyfication_number: 4578,
    art: ['first', 'second','third'],
    school: {
        street: 'chalbinskiego',
        number: 'numer szkoly',
        number_of_students: 400,
    }
    
};

let {name, school: { number_of_students}  } = object;
console.log(object);
console.warn(object.description);

const array_with_objects = [
    {
        description: "This is an array with objects inside her",
    },
    {
        id: 1,
        value: 'information',
    },
    {
        id: 2,
        value: 'information2',
    },
    {
        id: 3,
        value: 'information3',
    }
]
console.log(array_with_objects);
console.warn(array_with_objects[0].description);

array_with_objects.forEach(function(smt) {
    console.log(smt.value)
})

const fruits = [
    {
        item_id: 1,
        name: 'banana',
        capacity: 25,
    },
    {
        item_id: 2,
        name: 'apple',
        capacity: 15,
    },
    {
        item_id: 3,
        name: 'orange',
        capacity: 20,
    },
    {
        item_id: 4,
        name: 'lemon',
        capacity: 13,
    },
]
class People{
    constructor(name, surename, dob){
        this.name = name;
        this.surename = surename;
        this.dob = new Date(dob);
    }
    fullNames() {
        return `${this.name} ${this.surename}`;
    }
}
const person1 = new People('Dominika','Gluszkowska','9-18-1999');
console.log(person1.fullNames());
*/
const loginBase = 'maciekto';
const passwordBase = 'a';

const login = document.querySelector('#login');
const password = document.querySelector('#password');
const msg = document.querySelector('#confirmmsg');
const btn = document.querySelector('.submitbtn');
const result = document.querySelector('.success');

btn.addEventListener('click', zaloguj);

function zaloguj(e){
    e.preventDefault();

    if(login.value==='' || password.value===''){
        msg.classList.add('error');
        msg.innerText = 'Nie zostawiaj wolnych pól';
        setTimeout(() => msg.innerText = '',2000);
        setTimeout(() => msg.classList.remove('error'),2000);
    }else if(login.value !== loginBase || password.value !== passwordBase){
        msg.classList.add('error');
        msg.innerText = 'Nie poprawny login lub hasło';
        setTimeout(() => msg.innerText = '',2000);
        setTimeout(() => msg.classList.remove('error'),2000);
    }else{
        console.log('success');
        const write = document.createElement('p');
        
        write.innerHTML = `Hej, ${login.value}. Zalogowałeś się pomyślnie.`;

        result.appendChild(write);
        setTimeout(() => result.innerText = '',2000);

    }

}