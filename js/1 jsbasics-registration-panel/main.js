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
const myForm = document.querySelector('.form');
const login = document.querySelector('#login');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirm = document.querySelector('#confirm');
const submitbtn = document.querySelector('.submitbtn');
const msg = document.querySelector('#confirmmsg')
const result = document.querySelector('.result')

submitbtn.addEventListener('click', onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(login.value==='' || email.value===''|| password.value===''||confirm.value===''){
        msg.classList.add('error');
        msg.innerHTML ='Please enter all fields';
        setTimeout(() => msg.classList.remove('error'), 2000);
        setTimeout(() => msg.innerHTML = '', 2000);
    }else if(password.value!==confirm.value){
        msg.classList.add('error');
        msg.innerHTML = 'Passwords are diferent';
        setTimeout(() =>msg.classList.remove('error'), 2000);
        setTimeout(()=> msg.innerHTML = '', 2000);
    }else{
        console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(login.value));

        result.appendChild(li);

    }
}


